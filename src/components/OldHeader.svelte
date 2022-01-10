<!-- <script>
    let open = false;

    function toggleMenu() {
        open ? document.getElementById("nav").style.height = "50px" : document.getElementById("nav").style.height = "200px";
        open = !open;
    }
</script>

<header>
    <nav id="nav">
        <div class="nav-title">
            <h1>
                <a href="/">Helgesson.dev</a>
            </h1>
            <img
                class="expand"
                src="/assets/icons/expand_more.svg"
                alt="Expand Icon"
                width="40px"
                on:click={toggleMenu}

            />
        </div>
    </nav>
</header>

<style lang="scss">
    h1 {
        font-size: 1.75em;
        font-weight: bold;
        /* make bottom right corner rounded */
    }

    nav {
        position: fixed;
        top: 0;
        color: var(--theme-colors-secondary);
        background: var(--theme-colors-background-contrast);
        padding: 0.75rem;
        padding-bottom: 10rem;
        border-bottom-right-radius: 0.75em;
        width: fit-content;
        height: 50px;
        transition: all 0.5s ease-in-out;
        display: flex;
        flex-direction: column;
    }
    
    .nav-title {
        
    }

    .expand:hover {
        transition: all 0.2s ease;
        transform: scale(1.2);
    }
</style> -->
