# Frontera Hacks Website Docs

This is a hackathon boilerplate created by [Major League Hacking][mlh-github]. Using [Jekyll][jekyll], it has a extensible [configuration][config] that covers basic event information. You can then fork the website and have it hosted free through [GitHub Pages][github-pages]. It's free to use.

Advantages:

- Built in support for [MyMLH][my-mlh]
- Community-owned and maintained
- Free hosting through [GitHub Pages][github-pages]
- Discoverable through Google Search, Twitter and Facebook

[mlh-github]: https://github.com/MLH
[jekyll]: https://jekyllrb.com
[config]: _config.yml
[github-pages]: https://pages.github.com
[my-mlh]: https://my.mlh.io

## Getting Started

1. Create a [GitHub][create-account] account if you haven't already
2. Fork this repository to your own account. [Click here to fork this repo][fork-repo]
3. Edit [`_config.yml`][config] to configure for your own hackathon website
4. That's it - you should be able to access at `https://[github username].github.io/mlh-hackathon-boilerplate/`

[create-account]: https://github.com/join
[fork-repo]: https://github.com/MLH/mlh-hackathon-boilerplate/fork

### Run Locally

If you would like to populate and test the website locally, follow these steps:

1. Install Jekyll prerequisites by following one of the [guides][jekyll-guides]
    1. Install Ruby version 2.76.<br />
For mac run ```brew install ruby@2.7```.<br />
For windows use [RubyInstaller][rubyinstall]
    2. Download [RubyGem][install-gem]
    3. Install jekyll throught the guide.
2. Install Jekyll and bundler gems `gem install jekyll bundler`
3. Build and serve the site locally `bundle exec jekyll serve`
4. Head over to [http://localhost:4000/][localhost]
5. Make sure everything looks good 

[jekyll-guides]: https://jekyllrb.com/docs/installation/
[localhost]: http://localhost:4000/
[rubyinstall]: https://github.com/oneclick/rubyinstaller2/releases/download/RubyInstaller-2.7.6-1/rubyinstaller-2.7.6-1-x64.exe
[install-gem]: https://rubygems.org/pages/download

### Backend
In genera, We don't have to worry about that because Firebase is handling all of that for us. To add additional backend features that are not supported by the free tier (like functions and API calls), you will need to upgrade to the blaze plan. 

For changes to how we interact with firebase, edit 'firebase.html' which is located in '/_includes/analytics/firebase.html' and look at the [firebase documentation][firebase-docs]. Analytics is already set up; however, to monitor specfic actions look more into that.

[firebase-docs]: https://firebase.google.com/docs/guides

### Making changes
This site is structured to support more pages if needed by simply using the default.html layout in the '_layouts' folder. The layout already has the head,header, footer, and analytics ready to go when you template it. 

When you need to add a new section, take advantage of the components system, in order to reduce the noise from other code. This also allows for easy reuse of components in other pages in the future, by abstracting the existing components and making slots to make the components more resuable. 

#### Adding more variables
If you need to add more variables make sure to put them in the '_config.yml' file, in order to streamline this process and make it clear the variables that we are using throughout the entire site. To reference a specific variable make sure to prefix the relative path in the file with 'site.'. The event container in the config file helps to seperate variables that are related to the event from other general purposes variabels.

## CSS
'original.css' is self explanatory, this is the file that includes all of the css for the entire site, and it sits at the bottom of the CSS stack, so you can override these styles in other files and so on. 
Put any new styles in base.css. **I recommend that you divide the styles by the sections they modify and show at what level they sit from the root of their respective section.**

## WARNING
NEVER MAKE ANY CHANGES TO THE FILES WITHIN '_site' YOU WILL LOSE ALL OF YOUR PROGRESS AND YOU WILL, MOST DEFINETELY, CRY AND WISHED THAT YOU HAD BEEN WISER. You will never need to modify the files in '_site', so only modify the sections with their respective files in '_includes' and your pages in the main folder.