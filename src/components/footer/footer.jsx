import React from "react";
import "./footer.css";
function Footer() {
    var Year = new Date().getFullYear() 
    return (

        <div class="container">
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <p class="col-md-4 mb-0 text-muted">&copy; {Year} ALL RIGHTS RESERVED</p>
      
      
          <ul class="nav col-md-8    justify-content-end">
            <li class="nav-item"><a href="/child" class="nav-link px-2 text-muted">Çocuk</a></li>
            <li class="nav-item"><a href="/culture" class="nav-link px-2 text-muted">Kültür</a></li>
            <li class="nav-item"><a href="/history" class="nav-link px-2 text-muted">Tarih</a></li>
            <li class="nav-item"><a href="/literature" class="nav-link px-2 text-muted">Edebiyat</a></li>
            <li class="nav-item"><a href="/philosophy" class="nav-link px-2 text-muted">Felsefe</a></li>
            <li class="nav-item"><a href="/psychology" class="nav-link px-2 text-muted">Psikoloji</a></li>
            <li class="nav-item"><a href="/self-improvement" class="nav-link px-2 text-muted">Kişisel Gelişim</a></li>
            <li class="nav-item"><a href="/law-book" class="nav-link px-2 text-muted">Hukuk</a></li>
          </ul>
        </footer>
      </div>
    );
}
export default Footer;