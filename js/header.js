console.log("loaded");
class MainHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div id="top-box">
                <div class="header-title">Jefferson City Ward</div>
                <div class="header-bottom">
                    <div class="nav-links">
                        <a href="#">Home</a>
                        <a href="#">Documents</a>
                        <a href="pages/admin.html">Admin</a>
                    </div>
                    <div class="login-section">
                        <span id="user-email"></span>
                        <button onclick="signIn()">Sign In</button>
                        <button onclick="signOut()">Sign Out</button>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('main-header', MainHeader)


class PageHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div id="top-box">
                <div class="header-title">Jefferson City Ward</div>
                <div class="header-bottom">
                    <div class="nav-links">
                        <a href="../index.html">Home</a>
                        <a href="#">Documents</a>
                        <a href="#">Admin</a>
                    </div>
                    <div class="login-section">
                        <span id="user-email"></span>
                        <button onclick="signIn()">Sign In</button>
                        <button onclick="signOut()">Sign Out</button>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('page-header', PageHeader)