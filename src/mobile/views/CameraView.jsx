import React, {Component} from 'react';
import Camera, {FACING_MODES} from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import ImagePreview from '../../components/ImagePreview';
import {withApollo} from 'react-apollo';
import SoilTypeChart from '../../components/SoilTypeChart';
import Popup from 'reactjs-popup';
import {Upload, Button, Icon, Input, DatePicker, Menu, Dropdown} from 'antd';
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

const trees = {
  clay: [
    'Dawn redwood',
    'Maidenhair tree',
    'Shagbark hickory',
    'Sugarberry',
    'White oak'
  ],
  chalky: [
    'Spindle Bush',
    'White Wax Tree',
    'Winter Flowering Cherry',
    'Butterfly Bush',
    'Mahonia japonica'
  ],
  loamy: ['soft maple', 'honey locust', 'cottonwood', 'willow', 'Douglas fir'],
  peaty: [
    'Heather',
    'Lantern Trees',
    'Witch Hazel',
    'Camellia',
    'Rhododendron'
  ],
  sandy: ['Lavender', 'Artemisia', 'Rosemary', 'Sedum', 'Annuals'],
  silty: [
    'weeping willow',
    'bald cypress',
    'red twig dogwood',
    'river birch',
    'red chokeberry'
  ]
};

class CameraView extends Component {
  state = {
    results: null,
    dataUri: null,
    menu: null,
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

    // const menu = results[0].map((tree, i) => (
    //   <Menu.Item key={i}>
    //     <a href="http://www.alipay.com/">{tree}</a>
    //   </Menu.Item>
    // ));

    const menu = (
      <Menu>
        <Menu.Item key="0">{trees[results[0].name][0]}</Menu.Item>
        <Menu.Item key="1">{trees[results[0].name][1]}</Menu.Item>
        <Menu.Item key="2">{trees[results[0].name][2]}</Menu.Item>
        <Menu.Item key="3">{trees[results[0].name][3]}</Menu.Item>
        <Menu.Item key="4">{trees[results[0].name][4]}</Menu.Item>
      </Menu>
    );

    this.setState({results, dataUri, menu});
  }

  onTakePhotoAnimationDone(dataUri) {
    this.setState({dataUri});
  }

  render() {
    const {results, menu, dataUri, loading} = this.state;
    return (
      <div className="App">
        {dataUri ? (
          <ImagePreview image={dataUri} />
        ) : loading ? (
          <Icon style={{margin: '30px'}} type="loading" />
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
          {(menu && (
            <h3>We've found some viable options with respect to this soil.</h3>
          )) || <h3>Take a picture of the soil in order to evaluate it!</h3>}
          <Input style={{marginBottom: '20px'}} placeholder="Place" />
          <Input style={{marginBottom: '20px'}} placeholder="Type" />
          <DatePicker style={{marginBottom: '20px'}} onChange={'onChange'} />
          <Dropdown overlay={menu} trigger={['click']}>
            <a
              style={{marginLeft: '40px'}}
              className="ant-dropdown-link"
              href="#"
            >
              Tree options <Icon type="scan" />
            </a>
          </Dropdown>
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
