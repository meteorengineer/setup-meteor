# setup-meteor



This action sets up meteor environment for use in actions.

# Usage

See [action.yml](action.yml)

Basic:
```yaml
steps:
- uses: actions/checkout@v1
- uses: meteorengineer/setup-meteor@v1
  with:
    meteor-release: '1.8.1'
- run: meteor npm install
- run: meteor npm test
```

Matrix Testing:
```yaml
jobs:
  build:
    runs-on: ubuntu-16.04
    strategy:
      matrix:
        meteor: [ '1.8.1', '1.9-beta.3' ]
    name: Meteor ${{ matrix.meteor }} sample
    steps:
      - uses: actions/checkout@v1
      - name: Setup meteor
        uses: meteorengineer/setup-meteor@v1
        with:
          meteor-release: ${{ matrix.meteor }}
      - run: meteor npm install
      - run: meteor npm test
```

# License

The scripts and documentation in this project are released under the [MIT License](LICENSE)