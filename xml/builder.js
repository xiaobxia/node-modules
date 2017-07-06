/**
 * Created by xiaobxia on 2017/7/6.
 */
const builder = require('xmlbuilder');
const fs = require('fs');

let feedObj = {
    'feed': {
        '@xmlns': 'http://www.w3.org/2005/Atom',
        'title': { '@type': 'text', '#text': 'dive into mark' },
        'subtitle': { '@type': 'html', '#text': 'A <em>lot</em> of effort went into making this effortless' },
        'updated': '2005-07-31T12:29:29Z',
        'id': 'tag:example.org,2003:3',
        'link': [
            { '@rel': 'alternate', '@type': 'text/html', '@hreflang': 'en', '@href': 'http://example.org/' },
            { '@rel': 'self', '@type': 'application/atom+xml', '@href': 'http://example.org/feed.atom' }
        ],
        'rights': 'Copyright (c) 2003, Mark Pilgrim',
        'generator': { '@uri': 'http://www.example.com/', '@version': '1.0', '#text': 'Example Toolkit' },
        'entry': {
            'title': 'Atom draft-07 snapshot',
            'link': [
                { '@rel': 'alternate', '@type': 'text/html', '@href': 'http://example.org/2005/04/02/atom' },
                { '@rel': 'enclosure', '@type': 'audio/mpeg', '@length': '1337', '@href': 'http://example.org/audio/ph34r_my_podcast.mp3' }
            ],
            'id': 'tag:example.org,2003:3.2397',
            'updated': '2005-07-31T12:29:29Z',
            'published': '2003-12-13T08:29:29-04:00',
            'author': {
                'name': 'Mark Pilgrim',
                'uri': 'http://example.org/',
                'email': 'f8dy@example.com'
            },
            'contributor' : [
                { 'name': 'Sam Ruby' },
                { 'name': 'Joe Gregorio' }
            ],
            'content': {
                '@type': 'xhtml',
                '@xml:lang': 'en',
                '@xml:base': 'http://diveintomark.org/',
                'div': {
                    '@xmlns': 'http://www.w3.org/1999/xhtml',
                    'p': {
                        'i': '[Update: The Atom draft is finished.]'
                    }
                }
            }
        }
    }
};

let feed = builder.create(feedObj, { encoding: 'utf-8' });
fs.writeFile(__dirname+'/rss.xml',feed.end({pretty:true}),function (error) {
    console.log('error:',error)
});