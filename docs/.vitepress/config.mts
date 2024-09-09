import { defineConfig } from 'vitepress'
import fetch from "node-fetch";

let version = '1.x';
let changelog = '';
await fetch('https://api.github.com/repos/vitodeploy/vito/releases/latest')
  .then(response => response.json()).then((data: any) => {
    version = data.tag_name;
    changelog = data.html_url;
  });

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/',
  title: "VitoDeploy",
  description: "Free and Self-Hosted Server Management Tool",
  head: [
    [
      'script',
      {
        src: 'https://www.googletagmanager.com/gtag/js?id=G-9N4ER7K7M6',
      },
    ],
    [
      'script',
      {},
      "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-9N4ER7K7M6');",
    ]
  ],
  themeConfig: {
    logo: "/icon.png",

    nav: [
      { text: 'Home', link: '/' },
      { text: 'What is Vito?', link: '/introduction/what-is-vito' },
      { text: 'Get Started', link: '/introduction/installation' },
      {
        text: version, items: [
          { text: 'Changelog', link: changelog },
          { text: 'Contribute', link: '/introduction/contribution-guide' },
        ]
      }
    ],

    search: {
      provider: 'algolia',
      options: {
        appId: 'OSJRVBTWTB',
        apiKey: 'ed70c039271bac31d9f51d375c2e002e',
        indexName: 'vitodeploy',
      }
    },

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'What is Vito?', link: '/introduction/what-is-vito' },
          { text: 'Installation', link: '/introduction/installation' },
          { text: 'Configuration', link: '/introduction/configuration' },
          { text: 'Securing', link: '/introduction/securing' },
          { text: 'Update', link: '/introduction/update' },
          { text: 'Upgrade', link: '/introduction/upgrade' },
          { text: 'Contribution Guide', link: '/introduction/contribution-guide' }
        ]
      },
      {
        text: 'Servers',
        items: [
          { text: 'Create Server', link: '/servers/create-server' },
          { text: 'Server Providers', link: '/servers/server-providers' },
          { text: 'Server Types', link: '/servers/server-types' },
          { text: 'Database', link: '/servers/database' },
          { text: 'Database Backups', link: '/servers/database-backups' },
          { text: 'PHP', link: '/servers/php' },
          { text: 'Firewall', link: '/servers/firewall' },
          { text: 'CronJobs', link: '/servers/cronjobs' },
          { text: 'SSH Keys', link: '/servers/ssh-keys' },
          { text: 'Services', link: '/servers/services' },
          { text: 'Monitoring', link: '/servers/monitoring' },
          { text: 'Console', link: '/servers/console' },
          { text: 'Redis', link: '/servers/redis' },
          { text: 'Settings', link: '/servers/settings' },
          { text: 'Logs', link: '/servers/logs' },
        ]
      },
      {
        text: 'Sites',
        items: [
          { text: 'Create Site', link: '/sites/create-site' },
          { text: 'Application', link: '/sites/application' },
          { text: 'SSL', link: '/sites/ssl' },
          { text: 'Queues', link: '/sites/queues' },
          { text: 'Settings', link: '/sites/settings' },
        ]
      },
      {
        text: 'Settings',
        items: [
          { text: 'Profile', link: '/settings/profile' },
          { text: 'Projects', link: '/settings/projects' },
          { text: 'Server Providers', link: '/settings/server-providers' },
          { text: 'Source Controls', link: '/settings/source-controls' },
          { text: 'Notification Channels', link: '/settings/notification-channels' },
          { text: 'Storage Providers', link: '/settings/storage-providers' },
          { text: 'Tags', link: '/settings/tags' },
        ]
      },
      {
        text: 'Other Features',
        items: [
          { text: 'Scripts', link: '/other/scripts' },
        ]
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vitodeploy/vito' },
      { icon: 'discord', link: 'https://discord.gg/uZeeHZZnm5' },
      { icon: 'twitter', link: 'https://twitter.com/saeed_vz' },
      { icon: 'youtube', link: 'https://www.youtube.com/@saeedvaziry' },
    ],
    footer: {
      message: 'Made with ❤️',
      copyright: 'Copyright © 2023-present Saeed Vaziry'
    }
  }
})
