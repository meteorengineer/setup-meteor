# setup-meteor



This action sets up meteor environment for use in actions.

# Usage

See [action.yml](action.yml)

Basic:
```yaml
steps:
- uses: actions/checkout@v3
- uses: meteorengineer/setup-meteor@v3
  with:
    meteor-release: '3.4.0'
- run: meteor npm install
- run: meteor npm test
```

Matrix Testing:
```yaml
jobs:
  build:
    runs-on: ubuntu-24.04
    strategy:
      matrix:
        meteor: [ '3.1.2', '3.4.0 ]
    name: Meteor ${{ matrix.meteor }} sample
    steps:
      - uses: actions/checkout@v1
      - name: Setup meteor
        uses: meteorengineer/setup-meteor@v3
        with:
          meteor-release: ${{ matrix.meteor }}
      - run: meteor npm install
      - run: meteor npm test
```

# License

The scripts and documentation in this project are released under the [MIT License](LICENSE)