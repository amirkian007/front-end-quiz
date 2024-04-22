<script setup lang="ts">

const productData = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
] as const;
</script>

<template>
  <!-- seperate this into veu components -->
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Price</th>
        <th>Category</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="product in productData" :class="{ stocked: product.stocked }">
        <th colSpan="1">{{ product.name }}</th>
        <th colSpan="1">{{ product.price }}</th>
        <th colSpan="1">{{ product.category }}</th>
      </tr>
    </tbody>
  </table>
</template>
