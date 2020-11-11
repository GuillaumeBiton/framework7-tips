<Page name="home">
    <Navbar large title="Collections"></Navbar>
    <Card class="collections-highlight" style="
        background: url(https://cdn.mgig.fr/2019/06/mg-95319b11-16c8-496b-b6fb.png) no-repeat center top; 
	    background-size: cover; 
        height: 55vw;
        max-height: 400px;"
    >
        <CardHeader>
            Nouveautés
            <small style="opacity:0.7">8 astuces</small>
        </CardHeader>
        <CardContent>
            14
        </CardContent>
    </Card>
    <List class="collections-list" mediaList noHairlines>
        {#each collections as { link, title, after, subtitle, text, img }, i}
        <ListItem
            link={link}
            title={title}
            after={after}
            subtitle={subtitle}
            text={text}>
            <img alt="img" slot="media" src={img} style="background: white; width:80px; height:80px; object-fit: scale-down;"/>
        </ListItem>
        {/each}
    </List>
</Page>

<script>
    import { Page, Navbar, List, ListItem, Card, CardContent, CardHeader } from 'framework7-svelte';

    let collections = [
        {
            link: "/collection/welcome",
            title: "Welcome to iPhone",
            subtitle: "Get to know your iPhone",
            text: "8 tips",
            img: "https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iOS/ios14-iphone-11pro-widgets-home-screen.jpg"
        },
        {
            title: "Indispensables",
            subtitle: "Des fonctionnalités à décourvrir absoluement et que vous adorerez",
            text: "7 astuces",
            img: "https://www.apple.com/fr/ios/ios-14/images/overview/maps/curated_city_guides__dapxuahzztua_medium_2x.jpg"
        },
        {
            title: "Sélection Genius",
            subtitle: "Les morceaux favoris de nos experts",
            text: "6 astuces",
            img: "https://www.apple.com/v/ios/ios-14/b/images/overview/translate/enlarged_view__bgzf09g02u5e_medium_2x.jpg"
        },
        {
            title: "Bienvenue sur l'Apple Watch",
            subtitle: "Faites connaissance avec votre montre",
            text: "7 astuces",
            img: "https://www.apple.com/fr/ios/ios-14/images/overview/carplay/car_keys_wallet__gnyts6h9zf6u_medium_2x.jpg"
        }
    ]
</script>