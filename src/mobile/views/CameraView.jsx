import React, {Component} from 'react';
import Camera, {FACING_MODES} from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import ImagePreview from '../../components/ImagePreview';
import {withApollo} from 'react-apollo';
import SoilTypeChart from '../../components/SoilTypeChart';
import Popup from 'reactjs-popup';
import {Upload, Button, Icon, Input, DatePicker} from 'antd';
import MentionsTag from '../../components/MentionsTag';

const b64toBlob = (b64Data, contentType = '', sliceSize = 512) => {
  const byteCharacters = atob(b64Data);
  const byteArrays = [];

  for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    const slice = byteCharacters.slice(offset, offset + sliceSize);

    const byteNumbers = new Array(slice.length);
    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);
    byteArrays.push(byteArray);
  }

  const blob = new Blob(byteArrays, {type: contentType});
  return blob;
};

class CameraView extends Component {
  state = {
    results: null,
    dataUri: null,
    loading: false
  };

  async onTakePhoto(dataUri) {
    this.setState({loading: true});
    const [_, base64] = dataUri.split(',');
    const blob = b64toBlob(base64, 'image/png');

    // const {
    //   data: {fileUpload: Url}
    // } = await client.mutate({
    //   mutation: SOIL_ANALYSIS,
    //   variables: {
    //     file: blob,
    //     folderKey: 'photos',
    //     id: (Math.random() * Math.random()).toFixed(0)
    //   }
    // });

    const response = await fetch(
      'https://treeler.cognitiveservices.azure.com/customvision/v3.0/Prediction/1f05ffda-d30a-44c5-89d2-39c7d073897e/classify/iterations/Iteration6/image',
      {
        method: 'POST',
        body: blob,
        headers: {
          'Prediction-Key': '5f14b8469dd347b7a775d3dc5c24a5a7',
          'Content-Type': 'application/json'
        }
      }
    );

    const {predictions} = await response.json();
    const results = predictions.map(({probability, tagName: name}) => ({
      probability: (probability * 100).toPrecision(3),
      name
    }));

    this.setState({results, dataUri});
  }

  onTakePhotoAnimationDone(dataUri) {
    this.setState({dataUri});
  }

  render() {
    const {results, dataUri, loading} = this.state;
    return (
      <div className="App">
        {dataUri ? (
          <ImagePreview image={dataUri} />
        ) : loading ? (
          <div>Analysing...</div>
        ) : (
          <Camera
            idealFacingMode={FACING_MODES.ENVIRONMENT}
            isImageMirror={false}
            onTakePhotoAnimationDone={dataUri =>
              this.onTakePhotoAnimationDone(dataUri)
            }
            onTakePhoto={dataUri => {
              this.onTakePhoto(dataUri);
            }}
          />
        )}
        {results && (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              padding: '20px 40px 10px 0px'
            }}
          >
            <SoilTypeChart data={results} />
          </div>
        )}

        <div style={{padding: '40px'}}>
          <h3>Take a picture of the soil in order to evaluate it!</h3>
          <Input style={{marginBottom: '20px'}} placeholder="Place" />
          <Input style={{marginBottom: '20px'}} placeholder="Type" />
          <DatePicker style={{marginBottom: '20px'}} onChange={'onChange'} />
          <MentionsTag />
          <Button style={{margin: '20px 20px 20px 0', width: '100%'}}>
            <Icon type="submit" /> Submit
          </Button>
        </div>
      </div>
    );
  }
}

export default withApollo(CameraView);
