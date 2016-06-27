# Crossfit WOD
`node .` will `console.log` a random workout of the day from https://crossfit.com/workout/

Install globally with `npm install -g crossfit-wod`


## TODOs
Due to the usage of infinite scrolling on the officials crossfit page, we only operate on a very limited number of excercises that are initially loaded.
Consider either implement the auto-load of the further results or find out the date of the first excercise and randomize the dates from the initial date until today (which might cause a lot of requests).
Add tests.

## License

[MIT](https://opensource.org/licenses/MIT)

## Disclaimer, Warranty

This software is not related, authorized or maintained by https://crossfit.com or any other company named in the above document. Use this software responsibly.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
