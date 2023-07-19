const basic = `
<template>
  <b-card
    title="Card Title"
    :img-src="cardImg"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem"
  >
    <p class="hp-p1-body">
      Some quick example text to build on the card title and make up the
      bulk of the card's content.
    </p>

    <b-button href="#" variant="primary">Go somewhere</b-button>
  </b-card>
</template>

<script>
import { BCard, BButton } from "bootstrap-vue";

import cardImg from "@/assets/img/card/image-1.png";

export default {
  data() {
    return {
      cardImg: cardImg,
    };
  },
  components: {
    BCard,
    BButton,
  },
};
</script>
`

const titlesTextAndLinks = `
<template>
  <b-card title="Card title" sub-title="Card subtitle">
    <p class="hp-p1-body">
      Some quick example text to build on the <em>card title</em> and make
      up the bulk of the card's content.
    </p>

    <p class="hp-p1-body">A second paragraph of text in the card.</p>

    <a href="#" class="card-link">Card link</a>
    <b-link href="#" class="card-link">Another link</b-link>
  </b-card>
</template>

<script>
import { BCard, BLink } from "bootstrap-vue";

export default {
  components: {
    BCard,
    BLink,
  },
};
</script>
`

const images = `
<template>
  <div>
    <b-row class="mb-32">
      <b-col col-lg="6">
        <b-card :img-src="cardImg" img-alt="Card image" img-top>
          <p class="hp-p1-body">
            Some quick example text to build on the card and make up the
            bulk of the card's content.
          </p>
        </b-card>
      </b-col>

      <b-col col-lg="6">
        <b-card :img-src="cardImg" img-alt="Card image" img-bottom>
          <p class="hp-p1-body">
            Some quick example text to build on the card and make up the
            bulk of the card's content.
          </p>
        </b-card>
      </b-col>
    </b-row>

    <b-row>
      <b-col col-lg="6">
        <b-card
          :img-src="cardImg"
          img-width="50%"
          img-alt="Card image"
          img-left
        >
          <p class="hp-p1-body">
            Some quick example text to build on the card and make up the
            bulk of the card's content.
          </p>
        </b-card>
      </b-col>

      <b-col col-lg="6">
        <b-card
          :img-src="cardImg"
          img-width="50%"
          img-alt="Card image"
          img-right
        >
          <p class="hp-p1-body">
            Some quick example text to build on the card and make up the
            bulk of the card's content.
          </p>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { BRow, BCol, BCard } from "bootstrap-vue";

import cardImg from "@/assets/img/card/image-1.png";

export default {
  data() {
    return {
      cardImg: cardImg,
    };
  },
  components: {
    BRow,
    BCol,
    BCard,
  },
};
</script>
`

const overlay = `
<template>
  <b-card overlay no-body class="overflow-hidden border-0">
    <div
      class="position-absolute w-100 h-100 bg-primary"
      style="top: 0; left: 0; opacity: 0.5"
    ></div>

    <b-card-img
      :src="require('@/assets/img/card/image-2.png')"
      alt="Card Image"
    />

    <b-card-body overlay>
      <h4 class="text-white">Image Overlay</h4>
      <h6 class="text-white">Subtitle</h6>
      <p class="hp-p1-body text-white">
        Some quick example text to build on the card and make up the bulk
        of the card's content.
      </p>
    </b-card-body>
  </b-card>
</template>

<script>
import { BCard, BCardBody, BCardImg } from "bootstrap-vue";

export default {
  components: {
    BCard,
    BCardBody,
    BCardImg,
  },
};
</script>
`

const headerAndFooter = `
<template>
  <b-card-group deck>
    <b-card
      header="featured"
      header-tag="header"
      footer="Card Footer"
      footer-tag="footer"
      title="Title"
    >
      <p class="hp-p1-body">Header and footers using props.</p>
      
      <b-button href="#" variant="primary">Go somewhere</b-button>
    </b-card>

    <b-card title="Title" header-tag="header" footer-tag="footer">
      <template #header>
        <h6 class="mb-0">Header Slot</h6>
      </template>

      <p class="hp-p1-body">Header and footers using slots.</p>
      
      <b-button href="#" variant="primary">Go somewhere</b-button>
      
      <template #footer>
        <em>Footer Slot</em>
      </template>
    </b-card>
  </b-card-group>
</template>

<script>
import { BCard, BCardGroup, BButton } from "bootstrap-vue";

export default {
  components: {
    BCard,
    BCardGroup,
    BButton,
  },
};
</script>
`

const kitchen = `
<template>
  <b-card
    no-body
    style="max-width: 20rem"
    :img-src="require('@/assets/img/card/image-1.png')"
    img-alt="Image"
    img-top
  >
    <template #header>
      <h4 class="mb-0">Hello World</h4>
    </template>

    <b-card-body>
      <b-card-title>Card Title</b-card-title>
      <b-card-sub-title class="mb-2">Card Sub Title</b-card-sub-title>
      <b-card-text class="hp-p1-body">
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </b-card-text>
    </b-card-body>

    <b-list-group flush class="hp-p1-body">
      <b-list-group-item>Cras justo odio</b-list-group-item>
      <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
      <b-list-group-item>Vestibulum at eros</b-list-group-item>
    </b-list-group>

    <b-card-body>
      <a href="#" class="card-link">Card link</a>
      <a href="#" class="card-link">Another link</a>
    </b-card-body>

    <b-card-footer>This is a footer</b-card-footer>

    <b-card-img
      :src="require('@/assets/img/card/image-1.png')"
      alt="Image"
      bottom
    ></b-card-img>
  </b-card>
</template>

<script>
import { BCard, BCardBody, BCardFooter, BCardImg, BCardTitle, BCardSubTitle, BCardText, BListGroup, BListGroupItem } from "bootstrap-vue";

export default {
  components: {
    BCard,
    BCardBody,
    BCardFooter,
    BCardImg,
    BCardTitle,
    BCardSubTitle,
    BCardText,
    BListGroup,
    BListGroupItem,
  },
};
</script>
`

const horizontal = `
<template>
  <b-card no-body class="overflow-hidden" style="max-width: 540px">
    <b-row no-gutters>
      <b-col md="6">
        <b-card-img
          :src="require('@/assets/img/card/image-1.png')"
          alt="Image"
          class="rounded-0 h-100"
        ></b-card-img>
      </b-col>

      <b-col md="6">
        <b-card-body title="Horizontal Card">
          <b-card-text class="hp-p1-body">
            This is a wider card with supporting text as a natural lead-in
            to additional content. This content is a little bit longer.
          </b-card-text>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
import { BRow, BCol, BCard, BCardBody, BCardImg, BCardText } from "bootstrap-vue";

export default {
  components: {
    BRow,
    BCol,
    BCard,
    BCardBody,
    BCardImg,
    BCardText,
  },
};
</script>
`

const backgroundVariants = `
<template>
  <div>
    <b-card
      bg-variant="primary"
      text-variant="white"
      header="Primary"
      style="max-width: 18rem"
    >
      <b-card-text class="text-white">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </b-card-text>
    </b-card>

    <b-card
      bg-variant="secondary"
      text-variant="white"
      header="Secondary"
      style="max-width: 18rem"
    >
      <b-card-text class="text-white">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </b-card-text>
    </b-card>

    <b-card
      bg-variant="success"
      text-variant="white"
      header="Success"
      style="max-width: 18rem"
    >
      <b-card-text class="text-white">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </b-card-text>
    </b-card>

    <b-card bg-variant="info" header="Info" style="max-width: 18rem">
      <b-card-text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </b-card-text>
    </b-card>

    <b-card
      bg-variant="warning"
      header="Warning"
      style="max-width: 18rem"
    >
      <b-card-text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </b-card-text>
    </b-card>

    <b-card
      bg-variant="danger"
      text-variant="white"
      header="Danger"
      style="max-width: 18rem"
    >
      <b-card-text class="text-white">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </b-card-text>
    </b-card>

    <b-card bg-variant="light" header="Light" style="max-width: 18rem">
      <b-card-text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </b-card-text>
    </b-card>

    <b-card
      bg-variant="dark"
      text-variant="white"
      header="Dark"
      style="max-width: 18rem"
    >
      <b-card-text class="text-white">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
import { BCard, BCardText } from "bootstrap-vue";

export default {
  components: {
    BCard,
    BCardText,
  },
};
</script>
`

const borderVariants = `
<template>
  <div>
    <b-card
      border-variant="primary"
      header="Primary"
      header-bg-variant="primary"
      header-text-variant="white"
      style="max-width: 18rem"
    >
      <b-card-text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </b-card-text>
    </b-card>

    <b-card
      border-variant="secondary"
      header="Secondary"
      header-bg-variant="secondary"
      header-text-variant="white"
      style="max-width: 18rem"
    >
      <b-card-text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </b-card-text>
    </b-card>

    <b-card
      border-variant="success"
      header="Success"
      header-bg-variant="success"
      header-text-variant="white"
      style="max-width: 18rem"
    >
      <b-card-text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </b-card-text>
    </b-card>

    <b-card
      border-variant="info"
      header="Info"
      header-bg-variant="info"
      style="max-width: 18rem"
    >
      <b-card-text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </b-card-text>
    </b-card>

    <b-card
      border-variant="warning"
      header="Warning"
      header-bg-variant="warning"
      style="max-width: 18rem"
    >
      <b-card-text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </b-card-text>
    </b-card>

    <b-card
      border-variant="danger"
      header="Danger"
      header-bg-variant="danger"
      header-text-variant="white"
      style="max-width: 18rem"
    >
      <b-card-text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </b-card-text>
    </b-card>

    <b-card
      border-variant="light"
      header="Light"
      header-bg-variant="light"
      style="max-width: 18rem"
    >
      <b-card-text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </b-card-text>
    </b-card>

    <b-card
      border-variant="dark"
      header="Dark"
      header-bg-variant="dark"
      header-text-variant="white"
      style="max-width: 18rem"
    >
      <b-card-text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
import { BCard, BCardText } from "bootstrap-vue";

export default {
  components: {
    BCard,
    BCardText,
  },
};
</script>
`

const navIntegration = `
<template>
  <b-card title="Card Title" body-class="text-center" header-tag="nav">
    <template #header>
      <b-nav card-header tabs>
        <b-nav-item active>Active</b-nav-item>
        <b-nav-item>Inactive</b-nav-item>
        <b-nav-item disabled>Disabled</b-nav-item>
      </b-nav>
    </template>

    <b-card-text class="hp-p1-body">
      With supporting text below as a natural lead-in to additional
      content.
    </b-card-text>

    <b-button variant="primary">Go somewhere</b-button>
  </b-card>
</template>

<script>
import { BCard, BCardText, BButton, BNav, BNavItem } from "bootstrap-vue";

export default {
  components: {
    BCard,
    BCardText,
    BButton,
    BNav,
    BNavItem,
  },
};
</script>
`

const cardGroups = `
<template>
  <b-card-group>
    <b-card
      title="Title"
      :img-src="require('@/assets/img/card/image-1.png')"
      img-alt="Image"
      img-top
    >
      <b-card-text class="hp-p1-body">
        This is a wider card with supporting text below as a natural
        lead-in to additional content. This content is a little bit
        longer.
      </b-card-text>

      <template #footer>
        <small class="text-muted">Last updated 3 mins ago</small>
      </template>
    </b-card>

    <b-card
      title="Title"
      :img-src="require('@/assets/img/card/image-1.png')"
      img-alt="Image"
      img-top
    >
      <b-card-text class="hp-p1-body">
        This card has supporting text below as a natural lead-in to
        additional content.
      </b-card-text>

      <template #footer>
        <small class="text-muted">Last updated 3 mins ago</small>
      </template>
    </b-card>

    <b-card
      title="Title"
      :img-src="require('@/assets/img/card/image-1.png')"
      img-alt="Image"
      img-top
    >
      <b-card-text class="hp-p1-body">
        This is a wider card with supporting text below as a natural
        lead-in to additional content. This card has even longer content
        than the first to show that equal height action.
      </b-card-text>

      <template #footer>
        <small class="text-muted">Last updated 3 mins ago</small>
      </template>
    </b-card>
  </b-card-group>
</template>

<script>
import { BCard, BCardGroup, BCardText } from "bootstrap-vue";

export default {
  components: {
    BCard,
    BCardGroup,
    BCardText,
  },
};
</script>
`

const cardDeckGroups = `
<template>
  <b-card-group deck>
    <b-card
      title="Title"
      :img-src="require('@/assets/img/card/image-1.png')"
      img-alt="Image"
      img-top
    >
      <b-card-text class="hp-p1-body">
        This is a wider card with supporting text below as a natural
        lead-in to additional content. This content is a little bit
        longer.
      </b-card-text>

      <template #footer>
        <small class="text-muted">Last updated 3 mins ago</small>
      </template>
    </b-card>

    <b-card
      title="Title"
      :img-src="require('@/assets/img/card/image-1.png')"
      img-alt="Image"
      img-top
    >
      <b-card-text class="hp-p1-body">
        This card has supporting text below as a natural lead-in to
        additional content.
      </b-card-text>

      <template #footer>
        <small class="text-muted">Last updated 3 mins ago</small>
      </template>
    </b-card>

    <b-card
      title="Title"
      :img-src="require('@/assets/img/card/image-1.png')"
      img-alt="Image"
      img-top
    >
      <b-card-text class="hp-p1-body">
        This is a wider card with supporting text below as a natural
        lead-in to additional content. This card has even longer content
        than the first to show that equal height action.
      </b-card-text>

      <template #footer>
        <small class="text-muted">Last updated 3 mins ago</small>
      </template>
    </b-card>
  </b-card-group>
</template>

<script>
import { BCard, BCardGroup, BCardText } from "bootstrap-vue";

export default {
  components: {
    BCard,
    BCardGroup,
    BCardText,
  },
};
</script>
`

const cardColumnGroups = `
<template>
  <b-card-group columns>
    <b-card
      title="Card title that wraps to a new line"
      :img-src="require('@/assets/img/card/image-1.png')"
      img-alt="Image"
      img-top
    >
      <b-card-text class="hp-p1-body">
        This is a wider card with supporting text below as a natural
        lead-in to additional content. This content is a little bit
        longer.
      </b-card-text>
    </b-card>

    <b-card header="Quote">
      <blockquote class="blockquote mb-0">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          posuere erat a ante.
        </p>
        <footer class="blockquote-footer">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </footer>
      </blockquote>
    </b-card>

    <b-card
      title="Title"
      :img-src="require('@/assets/img/card/image-1.png')"
      img-alt="Image"
      img-top
    >
      <b-card-text class="hp-p1-body">
        This card has supporting text below as a natural lead-in to
        additional content.
      </b-card-text>
      <b-card-text class="small text-muted">Last updated 3 mins ago</b-card-text>
    </b-card>

    <b-card bg-variant="primary" text-variant="white">
      <blockquote class="card-blockquote">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          posuere erat a ante.
        </p>
        <footer>
          <small>
            Someone famous in
            <cite title="Source Title">Source Title</cite>
          </small>
        </footer>
      </blockquote>
    </b-card>

    <b-card>
      <b-card-title>Title</b-card-title>
      <b-card-text class="hp-p1-body">
        This card has supporting text below as a natural lead-in to
        additional content.
      </b-card-text>
      <b-card-text class="small text-muted">Last updated 3 mins ago</b-card-text>
    </b-card>

    <b-card
      :img-src="require('@/assets/img/card/image-1.png')"
      img-alt="Image"
      overlay
    ></b-card>

    <b-card
      :img-src="require('@/assets/img/card/image-1.png')"
      img-alt="Image"
      img-top
    >
      <b-card-text class="hp-p1-body">
        This is a wider card with supporting text below as a natural
        lead-in to additional content. This card has even longer content
        than the first.
      </b-card-text>
      <template #footer>
        <small class="text-muted">Footer Text</small>
      </template>
    </b-card>
  </b-card-group>
</template>

<script>
import { BCard, BCardGroup, BCardTitle, BCardText } from "bootstrap-vue";

export default {
  components: {
    BCard,
    BCardGroup,
    BCardTitle,
    BCardText,
  },
};
</script>
`

export default { basic, titlesTextAndLinks, images, overlay, headerAndFooter, kitchen, horizontal, backgroundVariants, borderVariants, navIntegration, cardGroups, cardDeckGroups, cardColumnGroups }