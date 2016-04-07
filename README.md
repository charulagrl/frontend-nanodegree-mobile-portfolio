## Website Performance Optimization portfolio project

Your challenge, if you wish to accept it (and we sure hope you will), is to optimize this online portfolio for speed! In particular, optimize the critical rendering path and make this page render as quickly as possible by applying the techniques you've picked up in the [Critical Rendering Path course](https://www.udacity.com/course/ud884).

To get started, check out the repository, inspect the code,

### Getting started

#### To run the code in you local

Some useful tips to help you get started:

1. Check out the repository
1. To inspect the site on your phone, you can run a local server

  ```bash
  $> cd /path/to/your-project-folder
  $> python -m SimpleHTTPServer 8080
  ```

1. Open a browser and visit localhost:8080
1. To run the minification, run the following commands:
  ``` bash
  $> grunt imagemin
  $> grunt cssmin
  $> grunt uglify
  $> grunt htmlmin
  ```

#### To run the code in production

1. Download and install [ngrok](https://ngrok.com/) to make your local server accessible remotely.

  ``` bash
  $> cd /path/to/your-project-folder
  $> ngrok http 8080
  ```

1. When you will run ngrok, it will show this:
  ``` Tunnel Status                 online                                                                                                                 
  Version                       2.0.25/2.0.2                                                                                                                               
  Region                        United States (us)                                                                                                                             
  Web Interface                 http://127.0.0.1:4040                                                                                                                           
  Forwarding                    http://385ed819.ngrok.io -> localhost:8080                                                                                                        
  Forwarding                    https://385ed819.ngrok.io -> localhost:8080                                                                                                                                                                          
  Connections                   ttl     opn     rt1     rt5     p50     p90                                                                                                         
                                0       0       0.00    0.00    0.00    0.00
  ```

  Copy the website it is forwaarding to, in my case it will be http://385ed819.ngrok.io and open it in your browser.

### Optimizations in main.js

1. line 451: Instead of quering all randomPizzaContainer elements again and again, query them once and store it in variable. Take all the common elements out of the for loop and store them in a variable.

1. line 476: Again the pizzasDiv element out of the loop so that we don't compute it over and over in loop.

1. line 510: Take common element scrollTop out of the loop and we are doing i % 5 to calculate phase values which can have values ranging only from 0-4. So, we can run this loop upto 5 and store all the possible phase values in an array.

1. line 514: Also, Querying all mover class elements by using getElementsByClassName to make it more efficient as compare to querySelectorAll.

1. line 544: calculate the dimensions of the window and total pizza can be according to it.