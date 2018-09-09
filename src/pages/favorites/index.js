import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';

import styles from './styles';

import FavoriteItem from './components/FavoriteItem';


export default class Favorites extends Component {

  static navigationOptions = {
    title: 'Meus Favoritos',
  }

  state = {
    favorites: [
      {
        "id": 102385064,
        "node_id": "MDEwOlJlcG9zaXRvcnkxMDIzODUwNjQ=",
        "name": "rocketnative-sublime-snippets",
        "full_name": "Rocketseat/rocketnative-sublime-snippets",
        "owner": {
          "login": "Rocketseat",
          "id": 28929274,
          "node_id": "MDEyOk9yZ2FuaXphdGlvbjI4OTI5Mjc0",
          "avatar_url": "https://avatars0.githubusercontent.com/u/28929274?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/Rocketseat",
          "html_url": "https://github.com/Rocketseat",
          "followers_url": "https://api.github.com/users/Rocketseat/followers",
          "following_url": "https://api.github.com/users/Rocketseat/following{/other_user}",
          "gists_url": "https://api.github.com/users/Rocketseat/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/Rocketseat/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/Rocketseat/subscriptions",
          "organizations_url": "https://api.github.com/users/Rocketseat/orgs",
          "repos_url": "https://api.github.com/users/Rocketseat/repos",
          "events_url": "https://api.github.com/users/Rocketseat/events{/privacy}",
          "received_events_url": "https://api.github.com/users/Rocketseat/received_events",
          "type": "Organization",
          "site_admin": false
        },
        "private": false,
        "html_url": "https://github.com/Rocketseat/rocketnative-sublime-snippets",
        "description": "Rocketseat React Native snippets for Sublime Text Editor",
        "fork": false,
        "url": "https://api.github.com/repos/Rocketseat/rocketnative-sublime-snippets",
        "forks_url": "https://api.github.com/repos/Rocketseat/rocketnative-sublime-snippets/forks",
        "keys_url": "https://api.github.com/repos/Rocketseat/rocketnative-sublime-snippets/keys{/key_id}",
        "collaborators_url": "https://api.github.com/repos/Rocketseat/rocketnative-sublime-snippets/collaborators{/collaborator}",
        "teams_url": "https://api.github.com/repos/Rocketseat/rocketnative-sublime-snippets/teams",
        "hooks_url": "https://api.github.com/repos/Rocketseat/rocketnative-sublime-snippets/hooks",
        "issue_events_url": "https://api.github.com/repos/Rocketseat/rocketnative-sublime-snippets/issues/events{/number}",
        "events_url": "https://api.github.com/repos/Rocketseat/rocketnative-sublime-snippets/events",
        "assignees_url": "https://api.github.com/repos/Rocketseat/rocketnative-sublime-snippets/assignees{/user}",
        "branches_url": "https://api.github.com/repos/Rocketseat/rocketnative-sublime-snippets/branches{/branch}",
        "tags_url": "https://api.github.com/repos/Rocketseat/rocketnative-sublime-snippets/tags",
        "blobs_url": "https://api.github.com/repos/Rocketseat/rocketnative-sublime-snippets/git/blobs{/sha}",
        "git_tags_url": "https://api.github.com/repos/Rocketseat/rocketnative-sublime-snippets/git/tags{/sha}",
        "git_refs_url": "https://api.github.com/repos/Rocketseat/rocketnative-sublime-snippets/git/refs{/sha}",
        "trees_url": "https://api.github.com/repos/Rocketseat/rocketnative-sublime-snippets/git/trees{/sha}",
        "statuses_url": "https://api.github.com/repos/Rocketseat/rocketnative-sublime-snippets/statuses/{sha}",
        "languages_url": "https://api.github.com/repos/Rocketseat/rocketnative-sublime-snippets/languages",
        "stargazers_url": "https://api.github.com/repos/Rocketseat/rocketnative-sublime-snippets/stargazers",
        "contributors_url": "https://api.github.com/repos/Rocketseat/rocketnative-sublime-snippets/contributors",
        "subscribers_url": "https://api.github.com/repos/Rocketseat/rocketnative-sublime-snippets/subscribers",
        "subscription_url": "https://api.github.com/repos/Rocketseat/rocketnative-sublime-snippets/subscription",
        "commits_url": "https://api.github.com/repos/Rocketseat/rocketnative-sublime-snippets/commits{/sha}",
        "git_commits_url": "https://api.github.com/repos/Rocketseat/rocketnative-sublime-snippets/git/commits{/sha}",
        "comments_url": "https://api.github.com/repos/Rocketseat/rocketnative-sublime-snippets/comments{/number}",
        "issue_comment_url": "https://api.github.com/repos/Rocketseat/rocketnative-sublime-snippets/issues/comments{/number}",
        "contents_url": "https://api.github.com/repos/Rocketseat/rocketnative-sublime-snippets/contents/{+path}",
        "compare_url": "https://api.github.com/repos/Rocketseat/rocketnative-sublime-snippets/compare/{base}...{head}",
        "merges_url": "https://api.github.com/repos/Rocketseat/rocketnative-sublime-snippets/merges",
        "archive_url": "https://api.github.com/repos/Rocketseat/rocketnative-sublime-snippets/{archive_format}{/ref}",
        "downloads_url": "https://api.github.com/repos/Rocketseat/rocketnative-sublime-snippets/downloads",
        "issues_url": "https://api.github.com/repos/Rocketseat/rocketnative-sublime-snippets/issues{/number}",
        "pulls_url": "https://api.github.com/repos/Rocketseat/rocketnative-sublime-snippets/pulls{/number}",
        "milestones_url": "https://api.github.com/repos/Rocketseat/rocketnative-sublime-snippets/milestones{/number}",
        "notifications_url": "https://api.github.com/repos/Rocketseat/rocketnative-sublime-snippets/notifications{?since,all,participating}",
        "labels_url": "https://api.github.com/repos/Rocketseat/rocketnative-sublime-snippets/labels{/name}",
        "releases_url": "https://api.github.com/repos/Rocketseat/rocketnative-sublime-snippets/releases{/id}",
        "deployments_url": "https://api.github.com/repos/Rocketseat/rocketnative-sublime-snippets/deployments",
        "created_at": "2017-09-04T17:19:36Z",
        "updated_at": "2018-04-29T04:48:39Z",
        "pushed_at": "2017-11-17T00:29:58Z",
        "git_url": "git://github.com/Rocketseat/rocketnative-sublime-snippets.git",
        "ssh_url": "git@github.com:Rocketseat/rocketnative-sublime-snippets.git",
        "clone_url": "https://github.com/Rocketseat/rocketnative-sublime-snippets.git",
        "svn_url": "https://github.com/Rocketseat/rocketnative-sublime-snippets",
        "homepage": "",
        "size": 505,
        "stargazers_count": 15,
        "watchers_count": 15,
        "language": null,
        "has_issues": true,
        "has_projects": true,
        "has_downloads": true,
        "has_wiki": true,
        "has_pages": false,
        "forks_count": 3,
        "mirror_url": null,
        "archived": false,
        "open_issues_count": 0,
        "license": null,
        "forks": 3,
        "open_issues": 0,
        "watchers": 15,
        "default_branch": "master",
        "organization": {
          "login": "Rocketseat",
          "id": 28929274,
          "node_id": "MDEyOk9yZ2FuaXphdGlvbjI4OTI5Mjc0",
          "avatar_url": "https://avatars0.githubusercontent.com/u/28929274?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/Rocketseat",
          "html_url": "https://github.com/Rocketseat",
          "followers_url": "https://api.github.com/users/Rocketseat/followers",
          "following_url": "https://api.github.com/users/Rocketseat/following{/other_user}",
          "gists_url": "https://api.github.com/users/Rocketseat/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/Rocketseat/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/Rocketseat/subscriptions",
          "organizations_url": "https://api.github.com/users/Rocketseat/orgs",
          "repos_url": "https://api.github.com/users/Rocketseat/repos",
          "events_url": "https://api.github.com/users/Rocketseat/events{/privacy}",
          "received_events_url": "https://api.github.com/users/Rocketseat/received_events",
          "type": "Organization",
          "site_admin": false
        },
        "network_count": 3,
        "subscribers_count": 6
      }
    ]
  }

  renderList = () => (
    <FlatList
      data={this.state.favorites}
      keyExtractor={item => String(item.id)}
      renderItem={({ item }) => <FavoriteItem favorite={item} />}
    />
  );

  render() {
    return (
      <View style={styles.container}>
        {!this.state.favorites.length
          ? <Text style={styles.empty}>Nehum favorito adicionado</Text>
          : this.renderList()
        }
      </View>
    );
  };
}

