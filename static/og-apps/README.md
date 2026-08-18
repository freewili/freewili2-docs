# FreeWili OG app catalog

Static assets, not documentation pages. Everything under `static/` is copied to
the site root verbatim, so these are served as:

    https://docs.freewili.com/og-apps/apps.json
    https://docs.freewili.com/og-apps/uf2/<slug>_main.uf2

`apps.json` is the remote catalog that **FreeWili OG App Explorer** fetches at
startup — it is the app's shipped default URL, so this path is load-bearing and
should not be renamed or routed over by a docs page.

These are FreeWili **1 / OG** (dual-RP2040) images, on the FreeWili 2 docs site
because that is where the OG app catalog is hosted.

Do not hand-edit `apps.json`. It is generated, together with the `.uf2` files
beside it, by `tools/build_catalog.py` in
[freewili/fwOGAppExplorer](https://github.com/freewili/fwOGAppExplorer) — see
`publish/README.md` there. The `sha256` in each entry is checked by the app
before anything is written to a board, so the JSON and the images have to be
replaced as a set.
