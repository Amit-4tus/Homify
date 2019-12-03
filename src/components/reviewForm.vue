<template name="reviewForm">
    <form class="reviewForm">
        <input type="text" class="desc">
        <select class="rating">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
        <input type="submit" value="ADD REVIEW" @click.prevent="doReview">
    </form>
</template>

<script>
export default {
    methods: {
        doReview() {
            console.log('reviewing');
        }
    }
}
</script>