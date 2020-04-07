<template>
    <div class="container">
        <h1 class="text-center">Create new movie</h1>
        <FormValidate type="create" />
    </div>
</template>

<script>
import FormValidate from './FormValidate';
export default {
    name: 'Create',
    components: { FormValidate }
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