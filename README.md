# Cumulocity IoT release notes website

<https://cumulocity.com/releasenotes>

**Built with [Hugo](https://gohugo.io/)**

## Development environment

- Clone the repository
- [Install Hugo](https://gohugo.io/getting-started/installing/)
- Open a terminal window on project directory and type `hugo server`

## Structure

The Cumulocity IoT release notes website architecture has the following structure:

- Section (e.g. *<http://cumulocity.com/releasenotes/release-10-10-0>*)
  - Subsection - renders as a single page (e.g. *<http://cumulocity.com/releasenotes/release-10-10-0/platform-10-10-0>*)
    - Anchor section - anchor tag in the subsection page (e.g. *<http://cumulocity.com/release-10-10-0/platform-10-10-0/#10-10-0-14>*)

The architecture is built with a mix of front matter and directory structure.

## Adding content

### 1. Add a new section

For each new GA release a new section is added:

A new section is defined by a markdown file with the following front matter:

```yaml
  ---
  title: Release 10.10.0
  bundle: release-10-10-0
  icon: "c8y-icon c8y-icon-notification"
  type: root
  layout: root
  weight: 90
  ---
```

### 2. Add the section root directory

All guides are stored in the ```content``` directory. To add a new section, create a directory here and name it with the `bundle` value set in the front matter.

### 3. Add a subsection

Inside the newly created directory create a markdown file with the name you wish to use as a url — e.g. `overview.md` with the following front matter:

```yaml
---
title: Overview # the page title
layout: bundle # don't change
weight: 10 # set the position of the page within the section in ascending order
aliases: # if needed, add the redirects here, otherwise remove this
  - /applications/overview/
---
# add optional content as markdown
These release notes for **Cumulocity IoT release 10.10.0, July 2021**, include all relevant changes (migration notes, improvements and fixes) that have been implemented in Cumulocity IoT Core, Cumulocity IoT Streaming Analytics, Cumulocity IoT Machine Learning, and Cumulocity IoT DataHub since the previous GA release.
```

If you're looking to have a short page without anchors, you're good to go, but if you want to add multiple subsections with anchors then proceed to the next step.

When adding multiple subsections, the content provided in this file will be rendered as a lead (text slightly larger) in the top of the page.

### 4. Add blocks of content with anchors to a page

To display multiple blocks of content and provide anchor links to display in the navigator, you'll have to follow these steps:

1. Add a directory with the exact same name as the markdown file adding the suffix `-bundle`, e.g. `overview-bundle`.

&nbsp;

2. Add a `index.html` file into the new directory with the following front matter:

```yaml
---
title: Applications # not important as we won't use it, but we need the title
headless: true # states that all content inside this directory is just a resource to be used in another page
---
```

&nbsp;
3. Add a markdown file for each block of content with the following front matter:

```yaml
---
title: Release 10.10.0.8 # will be used as anchor, i.e. /releasenotes/release-10-10-0/#10-10-0-8
weight: 10 # to set the position in the page
---

## Add content as markdown or HTML

<tr>
<td>
Cockpit</td>
<td > The visualization of the "Silo" and "Linear gauge" widgets as well as of the data points in the Data Point Library has been improved. </td>
<td>
MTM-36264</td>
</tr>

<tr>
<td>
Cockpit</td>
<td > A map widget placed in a group dashboard will now have the same limit of displayed devices as a map widget placed in an overview dashboard.</td>
<td>
MTM-38765</td>
</tr>
```

### 5. Add media

Media must be added to `/static/images/`. Add a new directory if none of the available suits your needs.

Keep all file names URL-friendly (lowercase, no special characters, and no empty spaces).

To use the images in your pages, just add the relative path e.g `![image title](/images/<directory name>/<file name>)`.


## Redirects

Redirects must be processed through aliases. Add aliases as an array, and make sure to remove `/guides` out of the url. Check the following example:

```yaml
---
title: Introduction to Cumulocity
layout: bundle
weight: 10
aliases:
  - /concepts-guide/introduction-to-cumulocity/
  - /concepts-guide/introduction-to-cumulocity.html
# this will redirect cumulocity.com/guides/concepts-guide/introduction-to-cumulocity/
# to cumulocity.com/guides/concepts/introduction
---
```

## Deploying to cumulocity.com/releasenotes

The `config.toml` file has the following base url:

`baseURL = "https://cumulocity.com/releasenotes"`

There is no versioning required like in case of cumulocity.com/guides and cumulocity.com/api since the release notes for the various versions are hold as sections.

Deploy using the Jenkins task `Deploy-c8y-docs-manual-release` and provide the branch name.


---
© Cumulocity GmbH  2019 + All rights reserved.
