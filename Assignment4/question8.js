function parseURL(url) {
    var parser = new URL(url);

    return {
        href: parser.href,
        protocol: parser.protocol,
        hostname: parser.hostname,
        pathname: parser.pathname,
        host: parser.host
    };
}

// Test the function
var url = "https://www.w3schools.com/CSS/css_grid.asp";
console.log(parseURL(url));
