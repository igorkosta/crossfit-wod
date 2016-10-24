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

## New in the 0.0.6
The output contains the links to the `next` and `previous` wod now as well:

```
{ title: 'Wednesday 060322',
  href: 'https://crossfit.com/workout/2006/03/22',
  excercises: 'Push Jerk 3-2-2-2-1-1-1-1-1 repsPost loads to commentsCompare to 060105.',
  picture_url: 'https://d1s2fu91rxnpt4.cloudfront.net/legacy/CF-NC_outsidesos.jpg',
  next: 'https://crossfit.com/workout/2006/03/23',
  previous: 'https://crossfit.com/workout/2006/03/21' }
```

## TODOs
- I randomize the date and requests the page of this date to crawl the workout. Most of the times the contents of the workout are inside of the first `<p></p>` block but not always. It might be the case that the first `<p></p>` holds some kind of page title with a link then the contents of this title will be shown as `excercises` which is not good :). I have to think how to solve this problem without creating a lot of mess.
- Implement search
- Tests - current coverage is `93.62%`. I have to hit `100%`
- Parse and response with media links


## License

[MIT](https://opensource.org/licenses/MIT)

## Disclaimer, Warranty

This software is not related, authorized or maintained by https://crossfit.com or any other company named in the above document. Use this software responsibly.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
