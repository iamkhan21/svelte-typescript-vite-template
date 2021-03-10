<script context="module">
  const linkConfig = {className: 'siimple--color-primary', inactiveClassName: 'siimple--color-dark'}
</script>

<script lang="ts">
    import {link} from "svelte-spa-router";
    import active from 'svelte-spa-router/active'
</script>

<header class="siimple-navbar siimple-navbar--fluid">
  <a class="siimple-navbar-title siimple--color-dark" href="/" use:link
  >Svelte Template</a
  >
  <div class="siimple--float-right">
    <a class="siimple-navbar-item siimple-link" href="/" use:link use:active={{...linkConfig,path:'/'}}>Home</a>
    <a class="siimple-navbar-item siimple-link" href="/about" use:link
       use:active={{...linkConfig,path:'/about'}}>About
    </a>
  </div>
</header>
