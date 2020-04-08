<template>
    <div class="container">
        <h1 class="text-center">Edit movie</h1>
        <FormValidate type="edit" />
    </div>
</template>

<script>
import FormValidate from './FormValidate';
export default {
    name: 'Edit',
    components: { FormValidate },
}
</script>
<style lang="scss" scoped>
    *{
        color: black;
    }
    .container{
        h1{
            font-size: 3rem;
        }
    }
</style>