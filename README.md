# Project Fugu API Showcase

The
[Project Fugu API Showcase](https://developer.chrome.com/blog/fugu-showcase/) is
a collection of apps that make use of APIs that were conceived in the context of
Project Fugu.

![Project Fugu API Showcase](https://user-images.githubusercontent.com/145676/166227856-49ec9d9f-ff68-4c68-9c15-a01b192483f5.png)

## Data flow

1. Community members submit their apps to the showcase via this
   [anonymous form](https://docs.google.com/forms/d/e/1FAIpQLScNd1rClbmFWh6FcMmjUNrwg9RLz8Jk4BkHz_-EOpmkVd_-9g/viewform)
   ([edit form](https://docs.google.com/forms/d/1jepNYg6P7zt1AyP9tOgqSY5MHCmBZcik7zzOhwtbUxc/edit)).
1. Form responses land in this world-readable
   [spreadsheet](https://docs.google.com/spreadsheets/d/1S_Apr0HavFCO7H9hKcRjIUrgoT7MFRg4uBm7aWSoaYo/edit?usp=sharing).
   The form is moderated by members of Chrome's Project Fugu team.
1. The spreadsheet is published as a
   [JSON file](https://sheets.googleapis.com/v4/spreadsheets/1S_Apr0HavFCO7H9hKcRjIUrgoT7MFRg4uBm7aWSoaYo/values/Sheet2?key=AIzaSyCkROWBarEOJ9hQJggyrlUFulOFA4h6AW0&alt=json).
1. The file [`index.mjs`](./index.mjs) consumes the JSON file and creates the
   output data in the [`data/`](./data) folder. Screenshots and app metadata are
   dynamically generated based on the live apps.
1. The whole repository is published to GitHub Pages.
1. The file [`data/index.html`](./data/index.html) is embedded as an iframe on
   [`GoogleChrome/developer.chrome.com/site/en/blog/fugu-showcase/index.md`](https://github.com/GoogleChrome/developer.chrome.com//blob/main/site/en/blog/fugu-showcase/index.md).

## Contributing

1. Fork the repository and clone your fork.
1. Install dependencies with `npm i`.
1. Run `npm start` to create a local build and serve it on
   [`http://localhost:8080`](http://localhost:8080).
1. You can trigger manual builds with `npm run build`. Changes are currently not
   watched, so you'll need to run `npm run build` manually when you make
   changes.
1. You can serve existing builds with `npm run serve`.

See [`CONTRIBUTING.md`](./CONTRIBUTING.md) for more information.

## Deploying a new release

(This can only be done by members of the Project Fugu team.)

1. Check the data in the
   [spreadsheet](https://docs.google.com/spreadsheets/d/1S_Apr0HavFCO7H9hKcRjIUrgoT7MFRg4uBm7aWSoaYo/edit?usp=sharing)
   for correctness. Remove any new rows that are spam or otherwise
   inappropriate. You can see when the site was last deployed by looking at the
   [Action](../../actions) tab of the repo and checking for the last successful
   run of the `pages build and deployment` action.
1. Run `npm start`, which triggers all data in [`data/`](./data) to be
   re-generated and which opens a local copy of the site on
   [`http://localhost:8080`](http://localhost:8080).
1. If everything looks good, run `npm run deploy` to deploy the site to GitHub
   Pages.

## License

Apache 2.0

## Disclaimer

This is not an official Google product.
