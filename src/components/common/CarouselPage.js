import React, { Component } from "react";
import {
  Carousel,
  CarouselCaption,
  CarouselInner,
  CarouselItem,
  View,
  Mask
} from "mdbreact";

class CarouselPage extends Component {
  render() {
    return (
      <Carousel
        activeItem={1}
        length={4}
        showControls={true}
        showIndicators={true}
        className="z-depth-1"
      >
        <CarouselInner>
          <CarouselItem itemId="1">
            <View>
              <img
                className="d-block w-100"
                src="https://cnet1.cbsistatic.com/img/ACuZ90EUmgLvFYdeiDJXSfnWeMA=/970x0/2018/08/07/a687246c-4d95-4822-91cd-8c4bb596c80a/uber-eats-booking-fees.jpg"
                no-repeat fixed center
              />
              <Mask overlay="black-slight" />
            </View>
            {/* <CarouselCaption>
              <h3 className="h3-responsive">
                The fast way to get food to your customers
              </h3>
              
            </CarouselCaption> */}
          </CarouselItem>
          <CarouselItem itemId="2">
            <View>
              <img
                className="d-block w-100 h-90"
                src="http://static.life.dailymirror.lk/media/images/image_00c348ba16.jpg"
                no-repeat fixed center
              />
              <Mask overlay="black-slight" />
            </View>
          </CarouselItem>
          <CarouselItem itemId="3">
            <View>
              <img
                className="d-block w-100"
                src="https://d1bv800myis4wj.cloudfront.net/img/sku/3c4743a0-e9a0-11e4-9b45-894c37876c84_sri-lankan-rice-curry_675_300.jpg"
                no-repeat fixed center
              />
              <Mask overlay="black-slight" />
            </View>
          </CarouselItem>
          <CarouselItem itemId="4">
            <View>
              <img
                className="d-block w-100"
                src="https://media.timeout.com/images/101853189/630/472/image.jpg"
                no-repeat fixed center
                alt="Mattonit's item"
              />
              <Mask overlay="black-slight" />
            </View>
          </CarouselItem>
        </CarouselInner>
      </Carousel>
    );
  }
}

export default CarouselPage;
