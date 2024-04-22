<script setup lang="ts">

function handleSubmit() {
  // handel data with browser features 
  // alert the form information on form submit here.
  alert(
    `your form information : \n email : <Entered_Name> \n email : <Entered_Email> \n message : <Entered_Message> \n `
  );
}
</script>

<template>
    <form class="form">

      <div>
        <label for="name">Name:</label>
        <input type="text" id="name" />
      </div>

      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" />
      </div>

      <div>
        <label for="message">Message:</label>
        <textarea id="message"></textarea>
      </div>

      <button type="submit">Submit</button>
    </form>
</template>
