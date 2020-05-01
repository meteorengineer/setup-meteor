# setup-meteor



This action sets up meteor environment for use in actions.

# Usage

See [action.yml](action.yml)

Matrix Testing:
```yaml
jobs:
  build:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        meteor: [ '1.9.3', '1.10.2' ]
    name: Meteor ${{ matrix.meteor }} sample
    steps:
      - uses: actions/checkout@v1
      - name: Setup meteor
        uses: CanyLink/setup-meteor@v1.0.3
        with:
          meteor-release: ${{ matrix.meteor }}
      - run: meteor npm install
      - run: meteor npm test
```

# License

The scripts and documentation in this project are released under the [MIT License](LICENSE)
