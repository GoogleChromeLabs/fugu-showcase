# Project Fugu API Showcase

The
[Project Fugu API Showcase](https://developer.chrome.com/blog/fugu-showcase/) is
a collection of apps that make use of APIs that were conceived in the context of
Project Fugu.

## Data flow

1. Community members submit their apps to the showcase via this
   [anonymous form](https://docs.google.com/forms/d/e/1FAIpQLScNd1rClbmFWh6FcMmjUNrwg9RLz8Jk4BkHz_-EOpmkVd_-9g/viewform)
   ([edit form](https://docs.google.com/forms/d/1jepNYg6P7zt1AyP9tOgqSY5MHCmBZcik7zzOhwtbUxc/edit)).
1. Form responses land in this world-readable
   [spreadsheet](https://docs.google.com/spreadsheets/d/1S_Apr0HavFCO7H9hKcRjIUrgoT7MFRg4uBm7aWSoaYo/edit?usp=sharing).
1. The spreadsheet is published as a
   [JSON file](https://sheets.googleapis.com/v4/spreadsheets/1S_Apr0HavFCO7H9hKcRjIUrgoT7MFRg4uBm7aWSoaYo/values/Sheet2?key=AIzaSyCkROWBarEOJ9hQJggyrlUFulOFA4h6AW0&alt=json).
1. The file [`index.mjs`](./index.mjs) consumes the JSON file and creates the
   output data in the [`data/`](./data) folder. Screenshots and app metadata are
   dynamically generated based on the live apps.
1. The whole repository is published to GitHub Pages.

## Deploying a new release

1. Check the data in the
   [spreadsheet](https://docs.google.com/spreadsheets/d/1S_Apr0HavFCO7H9hKcRjIUrgoT7MFRg4uBm7aWSoaYo/edit?usp=sharing)
   for correctness.
1. Run `npm run deploy`, which triggers all data in [`data/`](./data) to be
   re-generated.

## Contributing

See [`CONTRIBUTING.md`](./CONTRIBUTING.md) for more information.

## License

Apache 2.0

## Disclaimer

This is not an official Google product.
