<template>
  <b-row>
    <b-col cols="12" class="mb-32">
      <breadcrumb />
    </b-col>

    <b-col cols="12" class="mb-32">
      <page-title desc="You can use over 50 crypto icons." />
    </b-col>

    <b-col cols="12">
      <crypto-icon-item :propsCrypto="crypto" />
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol } from "bootstrap-vue";

import Breadcrumb from "@/layouts/components/content/breadcrumb/Breadcrumb.vue";
import PageTitle from "@/layouts/components/content/page-title/PageTitle.vue";
import CryptoIconItem from "./CryptoIconItem.vue";

export default {
  data() {
    return {
      crypto: [
        {
          img: "acala",
          title: "Acala",
        },
        {
          img: "algorand",
          title: "Algorand",
        },
        {
          img: "anchor",
          title: "Anchor",
        },
        {
          img: "astar",
          title: "Astar",
        },
        {
          img: "bitcoin",
          title: "Bitcoin",
        },
        {
          img: "bitcoin-cash",
          title: "Bitcoin Cash",
        },
        {
          img: "bitcoin-lightning",
          title: "Bitcoin Lightning",
        },
        {
          img: "cardano",
          title: "Cardano",
        },
        {
          img: "celo",
          title: "Celo",
        },
        {
          img: "cosmos",
          title: "Cosmos",
        },
        {
          img: "dash",
          title: "Dash",
        },
        {
          img: "dfinity",
          title: "Dfinity",
        },
        {
          img: "diem",
          title: "Diem",
        },
        {
          img: "dogecoin",
          title: "Dogecoin",
        },
        {
          img: "EOS",
          title: "Eos",
        },
        {
          img: "ethereum",
          title: "Ethereum",
        },
        {
          img: "ethereum-2.0",
          title: "Ethereum 2.0",
        },
        {
          img: "ethereum-classic",
          title: "Ethereum Classic",
        },
        {
          img: "filecoin",
          title: "Filecoin",
        },
        {
          img: "flow",
          title: "Flow",
        },
        {
          img: "goChain",
          title: "GoChain",
        },
        {
          img: "graph",
          title: "The Graph",
        },
        {
          img: "harmony",
          title: "Harmony",
        },
        {
          img: "helium",
          title: "Helium",
        },
        {
          img: "hyperledger",
          title: "Hyperledger",
        },
        {
          img: "keep",
          title: "Keep",
        },
        {
          img: "kusama",
          title: "Kusama",
        },
        {
          img: "litecoin",
          title: "Litecoin",
        },
        {
          img: "livepeer",
          title: "Livekeeper",
        },
        {
          img: "mina",
          title: "Mina",
        },
        {
          img: "mobileCoin",
          title: "Mobilecoin",
        },
        {
          img: "moonbeam",
          title: "Moonbeam",
        },
        {
          img: "near",
          title: "Near",
        },
        {
          img: "nuCypher",
          title: "NuCyper",
        },
        {
          img: "OAN",
          title: "OAN",
        },
        {
          img: "oasis",
          title: "Oasis",
        },
        {
          img: "parity-ethereum",
          title: "Parity Ethereum",
        },
        {
          img: "polkadot",
          title: "Polkadot",
        },
        {
          img: "provenance",
          title: "Provenance",
        },
        {
          img: "quorum",
          title: "Quorum",
        },
        {
          img: "XRP",
          title: "XRP",
        },
        {
          img: "serum",
          title: "Serum",
        },
        {
          img: "skale",
          title: "Skale",
        },
        {
          img: "solana",
          title: "Solana",
        },
        {
          img: "stacks",
          title: "Stacks",
        },
        {
          img: "stellar",
          title: "Stellar",
        },
        {
          img: "terra",
          title: "Terra",
        },
        {
          img: "tezos",
          title: "Tezos",
        },
        {
          img: "trust-wallet",
          title: "Trust Wallet",
        },
        {
          img: "zcash",
          title: "ZCash",
        },
      ],
    };
  },
  components: {
    BRow,
    BCol,
    Breadcrumb,
    PageTitle,
    CryptoIconItem,
  },
};
</script>
