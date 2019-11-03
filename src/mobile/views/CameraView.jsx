import React, {Component} from 'react';
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import {withApollo} from 'react-apollo';
import SOIL_ANALYSIS from '../../graphql/misc/queries';

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
    image: ''
  };

  async onTakePhoto(dataUri) {
    const {client} = this.props;
    const [_, base64] = dataUri.split(',');
    const blob = b64toBlob(base64, 'image/png');
    blob.name = 'lolbro.png';

    const {
      data: {fileUpload: Url}
    } = await client.mutate({
      mutation: SOIL_ANALYSIS,
      variables: {
        file: blob,
        folderKey: 'photos',
        id: (Math.random() * Math.random()).toFixed(0)
      }
    });

    console.log(Url);

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

    const result = await response.json();

    console.log(result);
  }

  render() {
    return (
      <div className="App">
        <img src={this.state.image} />
        <Camera
          onTakePhoto={dataUri => {
            this.onTakePhoto(dataUri);
          }}
        />
      </div>
    );
  }
}

export default withApollo(CameraView);
