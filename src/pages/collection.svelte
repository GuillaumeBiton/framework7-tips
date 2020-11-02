<Page name="collection">
    <Navbar backLink title={name}></Navbar>
    <Swiper class="demo-swiper" pagination params={{
        pagination: {
          hideOnClick: true,
        }
      }}>
      {#each collection as { title,src }}
        <SwiperSlide>
          <Block style="height: 100vh; width: 100%">
          <Row style="height: 70%; width: 100%"><Col class="col-center-content" style="height: 100%; width:100%"><img alt="img" src={src} style="width: 100%; height: 100%; object-fit: none"></Col></Row>
          <Row><Col class="col-center-content">{title}</Col></Row>
          </Block>
        </SwiperSlide>
      {/each}
    </Swiper>
</Page>

<style>
:global(.col-center-content) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>

<script>
    import { Page, Navbar, Swiper, SwiperSlide, Block, Row, Col } from 'framework7-svelte';
    
    export let name;

    let collection = [
      {
        title: "Add widgets to Today View",
        src: "https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iOS/ios14-iphone-11pro-widgets-today-view.jpg"
      },
      {
        title: "slide 2"
      },
      {
        title: "slide 3"
      },
    ];
</script>