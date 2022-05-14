import React from 'react'

export default function navbar() {
  return (
    <>
    <nav>
        <ul class="navbar">
            <li class="nav-li">
                <a href="/" class="btn nav-btn">
                    <img class="logo" src="https://cdn.discordapp.com/attachments/916700373534777374/948986319118413844/SASRP_GLow.png" alt="SASRP Logo" />
                </a>
            </li>
            <li class="nav-li nav-txt">
                <a href="/about/" class="btn nav-btn red-underline no-mobile">
                    <span class="nav-txt">About</span>
                </a>
            </li>
            <li class="nav-li nav-txt">
                <a href="https://store.sasrp.xyz" class="btn nav-btn red-underline">
                    <span class="nav-txt">store</span>
                </a> 
            </li>
            <li class="nav-li nav-txt">
                <a href="/rules" class="btn nav-btn red-underline">
                    <span class="nav-txt">rules</span>
                </a>
            </li>
            <li class="nav-li nav-txt">
                <a href="https://cad.sasrp.xyz/login.php" class="btn nav-btn red-underline no-mobile">
                    <span class="nav-txt">Cad</span>
                </a>
            </li>
            <li class="no-style">
            <a href="https://discord.gg/sasrp" class="join-btn discord-btn">discord</a>
            </li>
        </ul>
    </nav>
    </>
  )
}
