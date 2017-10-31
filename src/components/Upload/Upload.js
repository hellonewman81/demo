import React, {Component} from 'react';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';
import './Upload.css';

/* global FileReader */

const src = '';

export default class Upload extends Component {

  constructor(props) {
    super(props);
    this.state = {
      src,
      cropResult: null,
    };
    this.cropImage = this.cropImage.bind(this);
    this.onChange = this.onChange.bind(this);
    this.useDefaultImage = this.useDefaultImage.bind(this);
  }

  onChange(e) {
    e.preventDefault();

    let files;

    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }

    if (files[0]) {

      const reader = new FileReader();
      reader.onload = () => {
        this.setState({src: reader.result});
      };
      reader.readAsDataURL(files[0]);

    }
  }

  cropImage() {
    if (this.state.src === '') {
      return
    }
    this.setState({
      cropResult: this.cropper.getCroppedCanvas().toDataURL(),
    });

    // update avatar and set redux state via prop
    this.props.updateAvatar(this.cropper.getCroppedCanvas().toDataURL())

    // return to previous screen.
    this.props.toggleUploader()

  }

  useDefaultImage() {
    this.setState({src});
  }

  render() {
    return (
      <div>
        <div style={{width: '100%'}}>
          <label htmlFor="fileUploader">Upload Avatar</label>
          <input id="fileUploader" name="fileUploader" type="file" onChange={this.onChange} style={{margin: '0 .5rem .5rem'}}/>
          <Cropper
            style={{height: 300, width: '100%', backgroundColor: '#e7e7e7'}}
            aspectRatio={85 / 105}
            preview=".img-preview"
            guides={true}
            src={this.state.src}
            ref={cropper => {
              this.cropper = cropper;
            }}
          />
        </div>
        <div style={{marginTop: '1.5rem'}}>
          <div className="box" style={{width: '50%', float: 'left', padding: '0 .75rem 0 0'}}>
            <button className="uform-btn" type="button"
                    onClick={e => {
                      this.props.toggleUploader()
                      e.preventDefault()
                    }}>
              Cancel
            </button>
          </div>

          <div className="box" style={{width: '50%', float: 'right', padding: '0 0 0 .75rem'}}>
            <button className="uform-btn uform-btn-pmy" onClick={this.cropImage} style={{float: 'right'}}>
              Save Avatar
            </button>
          </div>

        </div>
        <br style={{clear: 'both'}}/>
      </div>
    );
  }
}