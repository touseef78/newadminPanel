const basic = `
<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=52">
        <h1 class="text-white">First slide</h1>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
        <h1 class="text-white">Hello world!</h1>
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide
        img-src="https://picsum.photos/1024/480/?image=58"
      ></b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="https://picsum.photos/1024/480/?image=55"
            alt="image slot"
          />
        </template>
      </b-carousel-slide>

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      <b-carousel-slide img-blank img-alt="Blank image">
        <h1 class="text-white">Blank image</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Suspendisse eros felis, tincidunt a tincidunt eget, convallis vel
          est. Ut pellentesque ut lacus vel interdum.
        </p>
      </b-carousel-slide>
    </b-carousel>

    <p class="mt-16 hp-p1-body">
      Slide #: {{ slide }}
      <br />
      Sliding: {{ sliding }}
    </p>
  </div>
</template>

<script>
import { BCarousel, BCarouselSlide } from "bootstrap-vue";

export default {
  data() {
    return {
      slide: 0,
      sliding: null,
    };
  },
  components: {
    BCarousel,
    BCarouselSlide,
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
  },
};
</script>
`

const crossfade = `
<template>
  <b-carousel
    id="carousel-fade"
    style="text-shadow: 0px 0px 2px #000"
    fade
    indicators
    img-width="1024"
    img-height="480"
  >
    <b-carousel-slide
      caption="First Slide"
      img-src="https://picsum.photos/1024/480/?image=10"
    ></b-carousel-slide>

    <b-carousel-slide
      caption="Second Slide"
      img-src="https://picsum.photos/1024/480/?image=12"
    ></b-carousel-slide>

    <b-carousel-slide
      caption="Third Slide"
      img-src="https://picsum.photos/1024/480/?image=22"
    ></b-carousel-slide>
  </b-carousel>
</template>

<script>
import { BCarousel, BCarouselSlide } from "bootstrap-vue";

export default {
  components: {
    BCarousel,
    BCarouselSlide,
  },
};
</script>
`

const disable = `
<template>
  <b-carousel
    id="carousel-no-animation"
    no-animation
    indicators
    img-width="1024"
    img-height="480"
  >
    <b-carousel-slide
      caption="First Slide"
      img-src="https://picsum.photos/1024/480/?image=10"
    ></b-carousel-slide>

    <b-carousel-slide
      caption="Second Slide"
      img-src="https://picsum.photos/1024/480/?image=12"
    ></b-carousel-slide>

    <b-carousel-slide
      caption="Third Slide"
      img-src="https://picsum.photos/1024/480/?image=22"
    ></b-carousel-slide>

    <b-carousel-slide
      caption="Fourth Slide"
      img-src="https://picsum.photos/1024/480/?image=23"
    ></b-carousel-slide>
  </b-carousel>
</template>

<script>
import { BCarousel, BCarouselSlide } from "bootstrap-vue";

export default {
  components: {
    BCarousel,
    BCarouselSlide,
  },
};
</script>
`

export default { basic, crossfade, disable }