<Page name="home">
    <Navbar large title="Collections"></Navbar>
    <List mediaList>
        {#each collections as { link, title, after, subtitle, text, img }, i}
        <ListItem
            link={link}
            title={title}
            after={after}
            subtitle={subtitle}
            text={text} >
            <img alt="img" slot="media" src={img} style="background: white; width:80px; height:80px; object-fit: scale-down;"/>
        </ListItem>
        {/each}
    </List>
</Page>

<script>
    import { Page, Navbar, List, ListItem } from 'framework7-svelte';

    let collections = [
        {
            link: "/collection/welcome",
            title: "Welcome to iPhone",
            subtitle: "Get to know your iPhone",
            text: "8 tips",
            img: "https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iOS/ios14-iphone-11pro-widgets-home-screen.jpg"
        },
        {
            link: "#",
            title: "Don't Stop Me Now",
            after: "22",
            subtitle: "Queen",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus.",
            img: "https://cdn.framework7.io/placeholder/people-160x160-2.jpg"
        },
        {
            link: "#",
            title: "Billie Jean",
            after: "16",
            subtitle: "Mickael Jackson",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tellus ut turpis condimentum, ut dignissim lacus tincidunt. Cras dolor metus, ultrices condimentum sodales sit amet, pharetra sodales eros. Phasellus vel felis tellus. Mauris rutrum ligula nec dapibus feugiat. In vel dui laoreet, commodo augue id, pulvinar lacus.",
            img: "https://cdn.framework7.io/placeholder/people-160x160-3.jpg"
        }
    ]
</script>