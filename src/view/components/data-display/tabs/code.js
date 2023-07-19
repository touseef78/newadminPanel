const basic = `
<template>
  <b-tabs>
    <b-tab title="First" active>
      <p class="hp-p1-body">I'm the first tab</p>
    </b-tab>
    <b-tab title="Second">
      <p class="hp-p1-body">I'm the second tab</p>
    </b-tab>
    <b-tab title="Disabled" disabled>
      <p class="hp-p1-body">I'm a disabled tab!</p>
    </b-tab>
  </b-tabs>
</template>

<script>
import { BTabs, BTab } from "bootstrap-vue";

export default {
  components: {
    BTabs,
    BTab,
  },
};
</script>
`

const pills = `
<template>
  <b-tabs pills>
    <b-tab title="Tab 1" active>
      <p class="hp-p1-body mt-8">Tab contents 1</p>
    </b-tab>
    <b-tab title="Tab 2">
      <p class="hp-p1-body mt-8">Tab contents 2</p>
    </b-tab>
  </b-tabs>
</template>

<script>
import { BTabs, BTab } from "bootstrap-vue";

export default {
  components: {
    BTabs,
    BTab,
  },
};
</script>
`

const fill = `
<template>
  <b-tabs content-class="mt-3" fill>
    <b-tab title="First" active>
      <p class="hp-p1-body">I'm the first tab</p>
    </b-tab>
    <b-tab title="Second">
      <p class="hp-p1-body">I'm the second tab</p>
    </b-tab>
    <b-tab title="Very, very long title">
      <p class="hp-p1-body">I'm the tab with the very, very long title</p>
    </b-tab>
    <b-tab title="Disabled" disabled>
      <p class="hp-p1-body">I'm a disabled tab!</p>
    </b-tab>
  </b-tabs>
</template>

<script>
import { BTabs, BTab } from "bootstrap-vue";

export default {
  components: {
    BTabs,
    BTab,
  },
};
</script>
`

const justified = `
<template>
  <b-tabs content-class="mt-3" justified>
    <b-tab title="First" active>
      <p class="hp-p1-body">I'm the first tab</p>
    </b-tab>
    <b-tab title="Second">
      <p class="hp-p1-body">I'm the second tab</p>
    </b-tab>
    <b-tab title="Very, very long title">
      <p class="hp-p1-body">I'm the tab with the very, very long title</p>
    </b-tab>
    <b-tab title="Disabled" disabled>
      <p class="hp-p1-body">I'm a disabled tab!</p>
    </b-tab>
  </b-tabs>
</template>

<script>
import { BTabs, BTab } from "bootstrap-vue";

export default {
  components: {
    BTabs,
    BTab,
  },
};
</script>
`

const alignment = `
<template>
  <b-tabs content-class="mt-3" align="center">
    <b-tab title="First" active>
      <p class="hp-p1-body">I'm the first tab</p>
    </b-tab>
    <b-tab title="Second">
      <p class="hp-p1-body">I'm the second tab</p>
    </b-tab>
    <b-tab title="Disabled" disabled>
      <p class="hp-p1-body">I'm a disabled tab!</p>
    </b-tab>
  </b-tabs>
</template>

<script>
import { BTabs, BTab } from "bootstrap-vue";

export default {
  components: {
    BTabs,
    BTab,
  },
};
</script>
`

const verticalTabs = `
<template>
  <b-tabs pills vertical>
    <b-tab title="Tab 1" active>
      <p class="hp-p1-body">Tab contents 1</p>
    </b-tab>
    <b-tab title="Tab 2">
      <p class="hp-p1-body">Tab contents 2</p>
    </b-tab>
    <b-tab title="Tab 3">
      <p class="hp-p1-body">Tab contents 3</p>
    </b-tab>
  </b-tabs>
</template>

<script>
import { BTabs, BTab } from "bootstrap-vue";

export default {
  components: {
    BTabs,
    BTab,
  },
};
</script>
`

const externalControls = `
<template>
  <div>
    <b-card no-body class="overflow-hidden">
      <b-tabs v-model="tabIndex" small card class="mt-n16">
        <b-tab title="General">
          <p class="hp-p1-body">I'm the first fading tab</p>
        </b-tab>
        <b-tab title="Edit profile">
          <p class="hp-p1-body">I'm the second tab</p>

          <b-card class="mt-8">
            <p class="hp-p1-body">I'm the card in tab</p>
          </b-card>
        </b-tab>
        <b-tab title="Premium Plan" disabled>
          <p class="hp-p1-body">Sibzamini!</p>
        </b-tab>
        <b-tab title="Info">
          <p class="hp-p1-body">I'm the last tab</p>
        </b-tab>
      </b-tabs>
    </b-card>

    <div class="text-center">
      <b-button-group class="mt-16">
        <b-button variant="primary" @click="tabIndex--">Previous</b-button>
        <b-button variant="primary" @click="tabIndex++">Next</b-button>
      </b-button-group>

      <div class="text-muted mt-8">Current Tab: {{ tabIndex }}</div>
    </div>
  </div>
</template>

<script>
import { BCard, BButton, BButtonGroup, BTabs, BTab } from "bootstrap-vue";

export default {
  data() {
    return {
      tabIndex: 1,
    };
  },
  components: {
    BCard,
    BButton,
    BButtonGroup,
    BTabs,
    BTab,
  },
};
</script>
`

const dynamicTabs = `
<template>
  <b-card no-body class="overflow-hidden">
    <b-tabs card class="mt-n16">
      <b-tab v-for="i in tabs" :key="'dyn-tab-' + i" :title="'Tab ' + i">
        <p class="hp-p1-body">Tab contents {{ i }}</p>

        <b-button
          size="sm"
          variant="danger"
          class="float-right mb-16"
          @click="closeTab(i)"
        >
          Close tab
        </b-button>
      </b-tab>

      <template #tabs-end>
        <b-nav-item role="presentation" @click.prevent="newTab" href="#">
          <i class="ri-add-line" style="font-size: 16px;"></i>
        </b-nav-item>
      </template>

      <template #empty>
        <div class="text-center text-muted hp-p1-body">
          There are no open tabs<br />
          Open a new tab using the <b>+</b> button above.
        </div>
      </template>
    </b-tabs>
  </b-card>
</template>

<script>
import { BCard, BButton, BTabs, BTab, BNavItem } from "bootstrap-vue";

export default {
  data() {
    return {
      tabs: [],
      tabCounter: 0,
    };
  },
  components: {
    BCard,
    BButton,
    BTabs,
    BTab,
    BNavItem,
  },
  methods: {
    closeTab(x) {
      for (let i = 0; i < this.tabs.length; i++) {
        if (this.tabs[i] === x) {
          this.tabs.splice(i, 1);
        }
      }
    },
    newTab() {
      this.tabs.push(this.tabCounter++);
    },
  },
};
</script>
`

export default { basic, pills, fill, justified, alignment, verticalTabs, externalControls, dynamicTabs }