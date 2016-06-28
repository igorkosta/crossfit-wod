# Crossfit WOD
crossfit-wod will log a random workout of the day from https://crossfit.com/workout/ to your console

## Installation

```
npm install -g crossfit-wod
```

## Usage

```
crossfit-wod
```

## TODOs
- I randomize the date and requests the page of this date to crawl the workout. Most of the times the contents of the workout are inside of the first `<p></p>` block but not always. It might be the case that the first `<p></p>` holds some kind of page title with a link then the contents of this title will be shown as `excercises` which is not good :). I have to think how to solve this problem without creating a lot of mess.
- Implement search
- Tests
- Parse and response with media links


## License

[MIT](https://opensource.org/licenses/MIT)

## Disclaimer, Warranty

This software is not related, authorized or maintained by https://crossfit.com or any other company named in the above document. Use this software responsibly.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
