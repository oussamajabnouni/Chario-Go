version: v3

1. remove redundant react import in favour of nextjs
2. introduce src folder to consist with common development standard.
3. new folder structure (as our growing codebase we need to provide some easy pattern so that user can easily customize their needs).
4. provide easy to use svg component through restructuring and decoupling (custom svg).
5. introduce ENV variables through .env file(because using .env is a regular development pattern and nextjs also introduce default support for .env files).
6. remove nextjs aliasing in favour of nextjs build in typescript path support.
7. introduce dynamic page routing for product pages.
