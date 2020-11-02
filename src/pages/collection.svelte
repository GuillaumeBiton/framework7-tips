<Page name="collection">
    <Navbar backLink title={name}></Navbar>
    <Swiper class="demo-swiper" pagination params={{
        pagination: {
          hideOnClick: true,
        }
      }}>
      {#each collection as { title }}
        <SwiperSlide>{title}</SwiperSlide>
      {/each}
    </Swiper>
</Page>

<script>
    import { Page, Navbar, Swiper, SwiperSlide } from 'framework7-svelte';
    
    export let name;

    let collection = [
      {
        title: "slide 1"
      },
      {
        title: "slide 2"
      },
      {
        title: "slide 3"
      },
    ];
</script>