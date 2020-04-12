<template>
    <div v-if="object.last_page > 1">
      <div class="pagination-wrapper" ref="main">
        <svg class="btn btn--prev" height="96" viewBox="0 0 24 24" width="96" xmlns="http://www.w3.org/2000/svg" @click.prevent=btnClick :class="{ disabled: object.current_page === 1 }">
            <path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"/>
            <path d="M0-.5h24v24H0z" fill="none"/>
        </svg>
        <div class="pagination-container">
            <div class="little-dot  little-dot--first"></div>
            <div class="little-dot">
            <div class="big-dot-container">
                <div class="big-dot"></div>
            </div>
            </div>
            <div class="little-dot  little-dot--last"></div>
        </div>
        <svg class="btn btn--next" height="96" viewBox="0 0 24 24" width="96" xmlns="http://www.w3.org/2000/svg" @click.prevent=btnClick >
            <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"/>
            <path d="M0-.25h24v24H0z" fill="none"/>
        </svg>
      </div>
    </div>
</template>
<script>
    export default {
        props: {
            pagination: {
                type: Function,
                required: true
            },
            object: {
				type: Object,
				required: true
			}
        },
        name: 'VuePaginate',
        data(){
            return {
                currentPage: this.object.current_page ?? 1,
            }
        },
        methods: {
            btnClick(event) {
                let btn = event.target;
                var paginationWrapper = this.$refs.main
                if(btn.classList.contains('disabled')) { return false };
                if(btn.classList.contains('btn--prev')) {
                    this.currentPage -= 1;
                    this.pagination(this.currentPage)
                    paginationWrapper.classList.add('transition-prev');
                } else {
                    this.currentPage += 1;
                    this.pagination(this.currentPage)
                    paginationWrapper.classList.add('transition-next');  
                }
                var timeout = setTimeout(this.cleanClasses, 500);
            },
            cleanClasses() {
                var paginationWrapper = this.$refs.main
                if(paginationWrapper.classList.contains('transition-next')) {
                    paginationWrapper.classList.remove('transition-next')
                } else if(paginationWrapper.classList.contains('transition-prev')) {
                    paginationWrapper.classList.remove('transition-prev')
                }
            }
        }
    }
</script>
<style scoped>
html, body {
  height: 100%;
  overflow: hidden;
}

body {
  background: #393994;
}

.pagination-wrapper {
  font-size: 0;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

@keyframes pagination-container--animation-prev {
  0% { transform: translateX(0); }
  100% { transform: translateX(18px); }
}

@keyframes pagination-container--animation-next {
  0% { transform: translateX(0); }
  100% { transform: translateX(-18px); }
}

.transition-prev .pagination-container {
  animation: pagination-container--animation-prev 0.3s forwards;
}

.transition-next .pagination-container {
  animation: pagination-container--animation-next 0.3s forwards;
}

.little-dot {
  width: 6px;
  height: 6px;
  background: #1a202c;
  border-radius: 100%;
  display: inline-block;
  vertical-align: middle;
  margin: 0 6px;
  position: relative;
  z-index: 10;
}

.little-dot--first,
.little-dot--last {
  z-index: 5;
}

@keyframes slideLeft {
  0% {
    transform: translateX(0px);
  }

  100% {
    transform: translateX(-18px);
  }
}

.transition-prev .little-dot--first {
  animation: slideLeft 0.4s 0.3s forwards cubic-bezier(0.165, 0.84, 0.44, 1);
}

@keyframes little-dot--first--animation {
  0% { opacity: 1; }
  100% { opacity: 0; }
}

.transition-next .little-dot--first {
  animation: little-dot--last--animation 0.3s forwards;
}


@keyframes little-dot--last--animation {
  0% { opacity: 1; }
  100% { opacity: 0; }
}

.transition-prev .little-dot--last {
  animation: little-dot--last--animation 0.3s forwards;
}

@keyframes slideRight {
  0% {
    transform: translateX(0px);
    opacity: 1;
  }

  100% {
    transform: translateX(18px);
    opacity: 1;
  }
}

.transition-next .little-dot--last {
  animation: slideRight 0.4s 0.3s forwards cubic-bezier(0.165, 0.84, 0.44, 1);
}

.big-dot {
  width: 12px;
  height: 12px;
  border-radius: 100%;
  background: #f6af54;
  position: absolute;
  top: 50%;
  right: -6px;
  transform: translateY(-50%);
}

.transition-next .big-dot {
  right: auto;
  left: -6px;
}

.big-dot-container {
  width: 18px;
  height: 18px;
  border-radius: 100%;
  position: absolute;
  top: 50%;
  right: 3px;
  transform: translateY(-50%);
  z-index: 10;
}

.transition-next .big-dot-container {
  right: auto;
  left: 3px;
}

@keyframes big-dot-container--animation-prev {
  0% { transform: translateY(-50%); }
  100% { transform: translateY(-50%) rotate(-179deg); }
}

@keyframes big-dot-container--animation-next {
  0% { transform: translateY(-50%); }
  100% { transform: translateY(-50%) rotate(-181deg); }
}

.transition-prev .big-dot-container {
  animation: big-dot-container--animation-prev 0.3s forwards;
}

.transition-next .big-dot-container {
  animation: big-dot-container--animation-next 0.3s forwards;
}

.btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  fill: #1a202c;
  cursor: pointer;
  transition: opacity 0.2s;
}

.btn:hover {
  opacity: 0.6;
}

.btn--next {
  left: calc(100% + 20px);  
}

.btn--prev {
  right: calc(100% + 20px);
}
</style>