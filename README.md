# Rotas de Clientes

App web para celular: tabelas tipo Excel (Cliente, Local, Endereço, CEP) com atalho para Google Maps e Apple Maps.

## Estrutura

```
rotas-clientes/
├── index.html              # app inteiro (HTML + CSS + JS)
├── manifest.json    # permite instalar na tela inicial
├── sw.js                   # service worker: instalação no Android e uso offline
├── README.md
└── assets/
    └── icons/              # icon.svg (original) e PNGs 180, 192, 512 e maskable
```

## Publicar no GitHub Pages

1. Envie **o conteúdo desta pasta** (com `index.html` na raiz do repositório).
2. Settings > Pages > Deploy from a branch > `main` / `(root)`.
3. Acesse `https://SEU-USUARIO.github.io/NOME-DO-REPO/`.

## Para crescer depois

Quando o `index.html` ficar grande, separe em `css/style.css` e `js/app.js` e adicione outras pastas dentro de `assets/`.

## Instalar no Android

Abra o endereço do GitHub Pages no Chrome e toque em **Instalar app** (botão no topo do app ou menu ⋮). O app vai para a gaveta de aplicativos, sem barras do navegador.

## Gerar um APK (opcional)

Com o site publicado, cole o endereço em https://www.pwabuilder.com e escolha Android para baixar o pacote (APK/AAB).

## Diagnóstico de instalação

Abra o endereço do app seguido de `#diagnostico` para ver o que está faltando para o Android instalar o app (manifest, ícones, service worker).
