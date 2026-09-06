
    function esc(s){
      return String(s??'').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
    }
    function typLabel(t){
      return ({person:'Person',tema:'Tema',metod:'Metod',jamforelse:'Jämförelse',plattform:'Plattform',bemotande:'Bemötande',skapare:'Skapare'}[t] || t || 'post');
    }
    function card(p){
      return `<article class="card"><div class="typ">${esc(typLabel(p.typ))}</div>
        <h3>${esc(p.etikett||p.id||'')}</h3>
        <p class="meta">${esc(p.fil||'')}</p>
        <span class="badge">${esc((p.status||'paper').toUpperCase())}</span></article>`;
    }
    const INLINE = {"status": "PAPER", "uppdaterad": "2026-09-06", "poster": [{"id": "messias-foretrade", "typ": "metod", "fil": "metoder/messias-foretrade.md", "status": "paper", "etikett": "Metod · Messias företräde"}, {"id": "christian-prince", "typ": "person", "fil": "personer/christian-prince.md", "status": "paper", "etikett": "Person · Christian Prince"}, {"id": "sam-shamoun", "typ": "person", "fil": "personer/sam-shamoun.md", "status": "paper", "etikett": "Person · Sam Shamoun"}, {"id": "dawah-aggressiv", "typ": "tema", "fil": "teman/dawah-aggressiv.md", "status": "paper", "etikett": "Tema · aggressiv dawah"}, {"id": "hadith-verklighetsbas", "typ": "metod", "fil": "teman/hadith-verklighetsbas.md", "status": "paper", "etikett": "Metod · hadith-verklighetsbas"}, {"id": "bemotande-ramverk", "typ": "metod", "fil": "bemotande/ramverk.md", "status": "paper", "etikett": "Bemötande · ramverk"}, {"id": "jamforelse-index", "typ": "jamforelse", "fil": "jamforelse/INDEX.md", "status": "paper", "etikett": "Jämförelse · INDEX / compare-grid"}, {"id": "jamforelse-mall-claim", "typ": "jamforelse", "fil": "jamforelse/mall-claim.md", "status": "paper", "etikett": "Jämförelse · claim-mall", "obligatoriska_fält": ["våldsdeklaration", "lager_3_lagligt_självskydd"]}, {"id": "exempel-apostasi-saknas", "typ": "jamforelse", "fil": "jamforelse/exempel-apostasi-saknas.md", "status": "paper", "etikett": "Jämförelse · exempel apostasipressur (struktur)"}, {"id": "jamforelse-pipeline", "typ": "jamforelse", "fil": "jamforelse/pipeline.md", "status": "paper", "etikett": "Jämförelse · pipeline"}, {"id": "jamforelse-fallacies", "typ": "jamforelse", "fil": "jamforelse/fallacies.md", "status": "paper", "etikett": "Jämförelse · fallacies"}, {"id": "argumentkarta", "typ": "metod", "fil": "metoder/argumentkarta.md", "status": "paper", "etikett": "Metod · argumentkarta"}, {"id": "vald-deklaration", "typ": "metod", "fil": "metoder/vald-deklaration.md", "status": "paper", "etikett": "Metod · våldsdeklaration"}, {"id": "sjalvskydd-vs-aggression", "typ": "metod", "fil": "metoder/sjalvskydd-vs-aggression.md", "status": "paper", "etikett": "Metod · självskydd vs aggression (lager 1/2/3)"}, {"id": "abrogation-naskh", "typ": "metod", "fil": "metoder/abrogation-naskh.md", "status": "paper", "etikett": "Metod · abrogation/naskh (ÖB-lås mild→hård)"}, {"id": "bakat-lagverk", "typ": "metod", "fil": "metoder/bakat-lagverk.md", "status": "paper", "etikett": "Metod · rota bakåt i lagverket"}, {"id": "bokens-folk-bekraftelse-vs-fiende", "typ": "jamforelse", "fil": "jamforelse/bokens-folk-bekraftelse-vs-fiende.md", "status": "paper", "etikett": "Jämförelse · Folket av Boken bekräftelse vs fiende"}, {"id": "argumentkarta-cp-shamoun", "typ": "jamforelse", "fil": "jamforelse/argumentkarta-cp-shamoun.md", "status": "paper", "etikett": "Jämförelse · argumentkarta CP+Shamoun"}, {"id": "plattform-paper", "typ": "plattform", "fil": "PLATTFORM-PAPER.md", "status": "paper", "etikett": "Plattform · kunskaps-UI (paper)"}, {"id": "skapare-index", "typ": "skapare", "fil": "skapare/INDEX.md", "status": "paper", "etikett": "Skapare · INDEX (hylla)"}, {"id": "skapare-exempel-tshirt", "typ": "skapare", "fil": "skapare/exempel-tshirt-PAPER.md", "status": "paper", "etikett": "Skapare · exempel t-shirt PAPER"}, {"id": "ekumeniskt-alexandria", "typ": "tema", "fil": "teman/ekumeniskt-alexandria-PAPER.md", "status": "paper", "etikett": "Tema · ekumeniskt Alexandria"}]};
    function render(data){
      const posts = Array.isArray(data.poster) ? data.poster : [];
      document.getElementById('load-meta').textContent =
        posts.length + ' poster · ' + (data.uppdaterad||'') + ' · PAPER';
      const put = (id, list) => {
        document.getElementById(id).innerHTML = list.length ? list.map(card).join('') : '<p class="empty">saknas</p>';
      };
      put('grid-kunskap', posts.filter(p => ['person','tema','plattform'].includes(p.typ)));
      put('grid-jamforelse', posts.filter(p => p.typ === 'jamforelse'));
      put('grid-metoder', posts.filter(p => p.typ === 'metod' || p.typ === 'bemotande'));
    }
    fetch('./frihet-katalog.json?t=' + Date.now(), {cache:'no-store'})
      .then(r => { if (!r.ok) throw 0; return r.json(); })
      .then(render)
      .catch(() => render(INLINE));
  