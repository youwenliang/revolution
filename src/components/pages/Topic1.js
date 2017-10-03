import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import Swiper from 'swiper';
import Modal from 'react-responsive-modal';

var modalId;

class TopicA extends Component {
  componentDidMount() {
    document.title = "Za-Tone | 自我認識";
    var swiper = new Swiper('.swiper-container', {
      pagination: '.swiper-pagination',
      slidesPerView: 3,
      simulateTouch: false,
      paginationClickable: true,
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      spaceBetween: 0,
      breakpoints: {
        // when window width is <= 960px
        960: {
          slidesPerView: 1,
          spaceBetween: 30
        }
      }
    });
  };

  state = {
    open: false,
  };

  onOpenModal = (e) => {
    modalId = e.target.dataset.id;
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  modalContent = (a) => {
    switch(a) {
      case "1":
        return (
          <h1>1</h1>
        );
      case "2":
        return (
          <h1>2</h1>
        );
      case "3":
        return (
          <h1>3</h1>
        );
      case "4":
        return (
          <h1>4</h1>
        );
      case "5":
        return (
          <h1>5</h1>
        );
      default:
        break;
    } 
  }

  render() {
    const { open } = this.state;
    return (
      <div>
        {/*--- Header ---*/}
        <header className="min-vh-100 pv5 df">
          <div className="center w-100 mw8 ph3 ph5-ns">
            <figure className="w-100 h5 bg-near-white mh0 mb4"></figure>
            <h1 className="tc">自我認識 <FontAwesome name='rocket'/></h1>
            <h3 className="tc">This is a description</h3>
          </div>
        </header>
        {/*--- Section 1 ---*/}
        <section className="bg-near-white pv5">
          <div className="center w-100 mw8 ph3 ph5-ns tc">
            <div className="mw9 center ph2">
              <div className="cf mb5">
                <div className="fl w-100 w-50-l w-100 ">
                  <div className="bg-white w-80-l pv4 h5 df">A</div>
                </div>
                <div className="fr w-100 w-50-l w-100 pl4-l tl">
                  <h3>Title</h3>
                  <h5>Description</h5>
                </div>
              </div>
              <div className="cf mb5">
                <div className="fr w-100 w-50-l w-100 ">
                  <div className="bg-white w-80-l ml4-l pv4 h5 df">B</div>
                </div>
                <div className="fl w-100 w-50-l w-100 tl">
                  <h3>Title</h3>
                  <h5>Description</h5>
                </div>
              </div>
              <div className="cf">
                <div className="fl w-100 w-50-l w-100 ">
                  <div className="bg-white w-80-l pv4 h5 df">C</div>
                </div>
                <div className="fr w-100 w-50-l w-100 pl4-l tl">
                  <h3>Title</h3>
                  <h5>Description</h5>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*--- Section 2 ---*/}
        <section className="bg-white pv5 df">
          <div className="center w-100 mw8 ph3 ph5-ns tc mb5">
            <h2>This is a section title</h2>
            <h4>This is a section description</h4>
            <div className="swiper-container mt5 mh2">
              <div className="swiper-wrapper h5">
                <div className="swiper-slide bg-near-white df cp" data-id="1" onClick={this.onOpenModal}>
                  Slide 1
                </div>
                <div className="swiper-slide bg-near-white df cp" data-id="2" onClick={this.onOpenModal}>
                  Slide 2
                </div>
                <div className="swiper-slide bg-near-white df cp" data-id="3" onClick={this.onOpenModal}>
                  Slide 3
                </div>
                <div className="swiper-slide bg-near-white df cp" data-id="4" onClick={this.onOpenModal}>
                  Slide 4
                </div>
                <div className="swiper-slide bg-near-white df cp" data-id="5" onClick={this.onOpenModal}>
                  Slide 5
                </div>
              </div>
            </div>
            <div className="swiper-pagination mt3"></div>
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
          </div>
          <Modal open={open} onClose={this.onCloseModal} little>
            <div className="mw5">
              {this.modalContent(modalId)}
            </div>
          </Modal>
        </section>
        {/*--- Section 3 ---*/}
        <section className="bg-near-white pv5">
          <div className="center w-100 mw8 ph3 ph5-ns tc mb5">
            <h2>This is a section title</h2>
            <h4>This is a section description</h4>
            <div className="mw9 center mt5">
              <div className="cf">
                <div className="fl w-100 w-third-l w-100 pa2">
                  <div className="bg-white pv4 h5 df cp" data-id="1" onClick={this.onOpenModal}>
                    <h3 className="pn">1</h3>
                  </div>
                </div>
                <div className="fl w-100 w-third-l w-100 pa2">
                  <div className="bg-white pv4 h5 df cp" data-id="2" onClick={this.onOpenModal}>
                    <h3 className="pn">2</h3>
                  </div>
                </div>
                <div className="fl w-100 w-third-l w-100 pa2">
                  <div className="bg-white pv4 h5 df cp" data-id="3" onClick={this.onOpenModal}>
                    <h3 className="pn">3</h3>
                  </div>
                </div>
                <div className="fl w-100 w-third-l w-100 pa2">
                  <div className="bg-white pv4 h5 df cp" data-id="4" onClick={this.onOpenModal}>
                    <h3 className="pn">4</h3>
                  </div>
                </div>
                <div className="fl w-100 w-third-l w-100 pa2">
                  <div className="bg-white pv4 h5 df cp" data-id="5" onClick={this.onOpenModal}>
                    <h3 className="pn">5</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default TopicA;
