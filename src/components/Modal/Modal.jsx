import React, { Component } from 'react';
import css from '../../css/Styles.module.css';

export class Modal extends Component {
  render() {
    return (
      <div className={css.Overlay}>
        <div className={css.Modal}>
          <img
            src="https://pixabay.com/get/g63d75ae7c6afc169d52fd07a71b2d1bd663d691d669aac7ef9cf488c12e35976e84a6c7c59e80345457501615dd14776c47ad54a479733b432e27c75f636effd_1280.jpg"
            alt=""
          />
        </div>
      </div>
    );
  }
}
