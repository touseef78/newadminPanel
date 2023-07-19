const basic = `
<template>
  <div>
    <p class="hp-p1-body">Using stand-alone:</p>

    <div class="mb-4">
      <b-avatar variant="primary">
        <i class="iconly-Curved-User"></i>
      </b-avatar>
      <b-avatar text="BV"></b-avatar>
      <b-avatar
        class="mb-8 mr-8"
        variant="info"
        src="https://placekitten.com/300/300"
      ></b-avatar>
      <b-avatar class="mb-8 mr-8"></b-avatar>
    </div>

    <p class="hp-p1-body mt-16">
      Using in components (list group) example:
    </p>

    <b-list-group style="max-width: 300px">
      <b-list-group-item class="d-flex align-items-center">
        <b-avatar class="mr-3"></b-avatar>
        <span class="mr-auto">J. Circlehead</span>
        <b-badge variant="primary">5</b-badge>
      </b-list-group-item>

      <b-list-group-item class="d-flex align-items-center">
        <b-avatar variant="primary" text="BV" class="mr-3"></b-avatar>
        <span class="mr-auto">BootstrapVue</span>
        <b-badge variant="primary">12</b-badge>
      </b-list-group-item>

      <b-list-group-item class="d-flex align-items-center">
        <b-avatar
          variant="info"
          src="https://placekitten.com/300/300"
          class="mr-3"
        ></b-avatar>
        <span class="mr-auto">Super Kitty</span>
        <b-badge variant="primary">9</b-badge>
      </b-list-group-item>

      <b-list-group-item class="d-flex align-items-center">
        <b-avatar variant="primary" class="mr-3">
          <i class="iconly-Curved-User"></i>
        </b-avatar>
        <span class="mr-auto">ACME group</span>
        <b-badge variant="primary">7</b-badge>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
import { BBadge, BAvatar, BListGroup, BListGroupItem } from "bootstrap-vue";

export default {
  components: {
    BBadge,
    BAvatar,
    BListGroup,
    BListGroupItem,
  },
};
</script>
`

const imageContent = `
<template>
  <div>
    <b-avatar :src="require('@/assets/img/memoji/memoji-1.png')"></b-avatar>
    <b-avatar :src="require('@/assets/img/memoji/memoji-1.png')" size="6rem"></b-avatar>
  </div>
</template>

<script>
import { BAvatar } from "bootstrap-vue";

export default {
  components: {
    BAvatar,
  },
};
</script>
`

const iconContent = `
<template>
  <div>
    <b-avatar variant="primary" icon="people-fill"></b-avatar>
    <b-avatar variant="primary" icon="star-fill"></b-avatar>
    <b-avatar variant="primary" icon="music-note"></b-avatar>
    <b-avatar variant="primary" icon="star-fill" size="4em"></b-avatar>
  </div>
</template>

<script>
import { BAvatar } from "bootstrap-vue";

export default {
  components: {
    BAvatar,
  },
};
</script>
`

const textContent = `
<template>
  <div>
    <b-avatar variant="primary" text="BV"></b-avatar>
    <b-avatar variant="primary" text="a"></b-avatar>
    <b-avatar variant="primary" text="Foo"></b-avatar>
    <b-avatar variant="primary" size="4em">
      Hello<br />World
    </b-avatar>
  </div>
</template>

<script>
import { BAvatar } from "bootstrap-vue";

export default {
  components: {
    BAvatar,
  },
};
</script>
`

const variants = `
<template>
  <div>
    <b-avatar variant="secondary">
      <i class="iconly-Curved-User"></i>
    </b-avatar>
    <b-avatar variant="primary">
      <i class="iconly-Curved-User"></i>
    </b-avatar>
    <b-avatar variant="dark">
      <i class="iconly-Curved-User"></i>
    </b-avatar>
    <b-avatar variant="light">
      <i class="iconly-Curved-User"></i>
    </b-avatar>
    <b-avatar variant="success">
      <i class="iconly-Curved-User"></i>
    </b-avatar>
    <b-avatar variant="danger">
      <i class="iconly-Curved-User"></i>
    </b-avatar>
    <b-avatar variant="warning">
      <i class="iconly-Curved-User"></i>
    </b-avatar>
    <b-avatar variant="info">
      <i class="iconly-Curved-User"></i>
    </b-avatar>
  </div>
</template>

<script>
import { BAvatar } from "bootstrap-vue";

export default {
  components: {
    BAvatar,
  },
};
</script>
`

const sizing = `
<template>
  <div>
    <b-avatar variant="primary">
      <i class="iconly-Curved-User"></i>
    </b-avatar>
    <b-avatar size="sm" variant="primary">
      <i class="iconly-Curved-User" style="font-size: 14px"></i>
    </b-avatar>
    <b-avatar size="lg" variant="primary">
      <i class="iconly-Curved-User" style="font-size: 32px"></i>
    </b-avatar>
    <b-avatar :size="24" variant="primary">
      <i class="iconly-Curved-User" style="font-size: 14px"></i>
    </b-avatar>
    <b-avatar size="3em" variant="primary">
      <i class="iconly-Curved-User"></i>
    </b-avatar>
    <b-avatar size="72px" variant="primary">
      <i class="iconly-Curved-User" style="font-size: 44px"></i>
    </b-avatar>
  </div>
</template>

<script>
import { BAvatar } from "bootstrap-vue";

export default {
  components: {
    BAvatar,
  },
};
</script>
`

const square = `
<template>
  <b-avatar square variant="primary">
    <i class="iconly-Curved-User"></i>
  </b-avatar>
</template>

<script>
import { BAvatar } from "bootstrap-vue";

export default {
  components: {
    BAvatar,
  },
};
</script>
`

const rounding = `
<template>
  <div>
    <b-avatar rounded="sm" variant="primary">
      <i class="iconly-Curved-User"></i>
    </b-avatar>
    <b-avatar rounded variant="primary">
      <i class="iconly-Curved-User"></i>
    </b-avatar>
    <b-avatar rounded="lg" variant="primary">
      <i class="iconly-Curved-User"></i>
    </b-avatar>
    <b-avatar rounded="top" variant="primary">
      <i class="iconly-Curved-User"></i>
    </b-avatar>
    <b-avatar rounded="left" variant="primary">
      <i class="iconly-Curved-User"></i>
    </b-avatar>
    <b-avatar rounded="right" variant="primary">
      <i class="iconly-Curved-User"></i>
    </b-avatar>
    <b-avatar rounded="bottom" variant="primary">
      <i class="iconly-Curved-User"></i>
    </b-avatar>
  </div>
</template>

<script>
import { BAvatar } from "bootstrap-vue";

export default {
  components: {
    BAvatar,
  },
};
</script>
`

const button = `
<template>
  <b-list-group>
    <b-list-group-item>
      <b-avatar
        button
        @click="onClick"
        variant="primary"
        text="FF"
        class="align-baseline mr-8"
      ></b-avatar>
      Button Text Avatar
    </b-list-group-item>

    <b-list-group-item>
      <b-avatar
        button
        @click="onClick"
        :src="require('@/assets/img/memoji/memoji-1.png')"
        class="mr-8"
      ></b-avatar>
      Button Image Avatar
    </b-list-group-item>

    <b-list-group-item>
      <b-avatar
        button
        @click="onClick"
        icon="star-fill"
        class="align-center mr-8"
      ></b-avatar>
      Button Icon Avatar
    </b-list-group-item>
  </b-list-group>
</template>

<script>
import { BAvatar, BListGroup, BListGroupItem } from "bootstrap-vue";

export default {
  components: {
    BAvatar,
    BListGroup,
    BListGroupItem,
  },
};
</script>
`

const link = `
<template>
  <b-list-group>
    <b-list-group-item>
      <b-avatar
        href="#foo"
        variant="primary"
        text="FF"
        class="align-baseline mr-8"
      ></b-avatar>
      Button Text Avatar
    </b-list-group-item>

    <b-list-group-item>
      <b-avatar
        href="#bar"
        :src="require('@/assets/img/memoji/memoji-1.png')"
        class="mr-8"
      ></b-avatar>
      Button Image Avatar
    </b-list-group-item>

    <b-list-group-item>
      <b-avatar
        href="#baz"
        icon="star-fill"
        class="align-center mr-8"
      ></b-avatar>
      Button Icon Avatar
    </b-list-group-item>
  </b-list-group>
</template>

<script>
import { BAvatar, BListGroup, BListGroupItem } from "bootstrap-vue";

export default {
  components: {
    BAvatar,
    BListGroup,
    BListGroupItem,
  },
};
</script>
`

const badge = `
<template>
  <div>
    <b-avatar class="bg-primary-4 text-primary" badge variant="primary">
      <i class="iconly-Curved-User"></i>
    </b-avatar>
    <b-avatar badge badge-variant="danger" variant="primary">
      <i class="iconly-Curved-User"></i>
    </b-avatar>
    <b-avatar badge badge-variant="warning" variant="primary">
      <i class="iconly-Curved-User"></i>
    </b-avatar>
    <b-avatar badge badge-variant="success" variant="primary">
      <i class="iconly-Curved-User"></i>
    </b-avatar>
    <b-avatar badge badge-variant="info" variant="primary">
      <i class="iconly-Curved-User"></i>
    </b-avatar>
    <b-avatar badge badge-variant="secondary" variant="primary">
      <i class="iconly-Curved-User"></i>
    </b-avatar>
    <b-avatar badge badge-variant="dark" variant="primary">
      <i class="iconly-Curved-User"></i>
    </b-avatar>
  </div>
</template>

<script>
import { BAvatar } from "bootstrap-vue";

export default {
  components: {
    BAvatar,
  },
};
</script>
`

const badgeContent = `
<template>
  <b-avatar
    badge="+9"
    variant="none"
    :src="require('@/assets/img/memoji/memoji-1.png')"
  />
</template>

<script>
import { BAvatar } from "bootstrap-vue";

export default {
  components: {
    BAvatar,
  },
};
</script>
`

const badgePositioning = `
<template>
  <div>
    <div>
      <b-avatar
        badge
        variant="none"
        :src="require('@/assets/img/memoji/memoji-1.png')"
      />
      <b-avatar
        badge
        badge-left
        variant="none"
        :src="require('@/assets/img/memoji/memoji-1.png')"
      />
      <b-avatar
        badge
        badge-top
        variant="none"
        :src="require('@/assets/img/memoji/memoji-1.png')"
      />
      <b-avatar
        badge
        badge-left
        badge-top
        variant="none"
        :src="require('@/assets/img/memoji/memoji-1.png')"
      />
    </div>

    <div>
      <b-avatar
        badge
        variant="none"
        :src="require('@/assets/img/memoji/memoji-1.png')"
      />
      <b-avatar
        badge
        badge-offset="-0.5em"
        variant="none"
        :src="require('@/assets/img/memoji/memoji-1.png')"
      />
      <b-avatar
        badge
        badge-offset="-2px"
        variant="none"
        :src="require('@/assets/img/memoji/memoji-1.png')"
      />
      <b-avatar
        badge
        badge-offset="2px"
        variant="none"
        :src="require('@/assets/img/memoji/memoji-1.png')"
      />
      <b-avatar
        badge
        badge-top
        variant="none"
        :src="require('@/assets/img/memoji/memoji-1.png')"
      />
      <b-avatar
        badge
        badge-top
        badge-offset="-0.5em"
        variant="none"
        :src="require('@/assets/img/memoji/memoji-1.png')"
      />
      <b-avatar
        badge
        badge-top
        badge-offset="-2px"
        variant="none"
        :src="require('@/assets/img/memoji/memoji-1.png')"
      />
      <b-avatar
        badge
        badge-top
        badge-offset="2px"
        variant="none"
        :src="require('@/assets/img/memoji/memoji-1.png')"
      />
    </div>
  </div>
</template>

<script>
import { BAvatar } from "bootstrap-vue";

export default {
  components: {
    BAvatar,
  },
};
</script>
`

const groups = `
<template>
  <b-avatar-group size="60px">
    <b-avatar></b-avatar>
    <b-avatar text="BV" variant="primary"></b-avatar>
    <b-avatar
      src="https://placekitten.com/300/300"
      variant="info"
    ></b-avatar>
    <b-avatar text="OK" variant="danger"></b-avatar>
    <b-avatar variant="warning"></b-avatar>
    <b-avatar
      src="https://placekitten.com/320/320"
      variant="dark"
    ></b-avatar>
    <b-avatar icon="music-note" variant="success"></b-avatar>
  </b-avatar-group>
</template>

<script>
import { BAvatarGroup, BAvatar } from "bootstrap-vue";

export default {
  components: {
    BAvatarGroup,
    BAvatar,
  },
};
</script>
`

const groupOverlap = `
<template>
  <b-avatar-group overlap="0.65">
    <b-avatar variant="primary">
      <i class="iconly-Curved-User"></i>
    </b-avatar>
    <b-avatar variant="primary">
      <i class="iconly-Curved-User"></i>
    </b-avatar>
    <b-avatar variant="primary">
      <i class="iconly-Curved-User"></i>
    </b-avatar>
    <b-avatar variant="primary">
      <i class="iconly-Curved-User"></i>
    </b-avatar>
    <b-avatar variant="primary">
      <i class="iconly-Curved-User"></i>
    </b-avatar>
  </b-avatar-group>
</template>

<script>
import { BAvatarGroup, BAvatar } from "bootstrap-vue";

export default {
  components: {
    BAvatarGroup,
    BAvatar,
  },
};
</script>
`

export default { basic, imageContent, iconContent, textContent, variants, sizing, square, rounding, button, link, badge, badgeContent, badgePositioning, groups, groupOverlap }