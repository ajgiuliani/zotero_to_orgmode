# zotero_to_orgmode
Zotero translator allowing copy paste references into org-mode for annotation

## Usage
The `Zotero_to_Orgmod.js` file is a small translator for zotero. When in the Zotero preferences, Zotero to Orgmode is selected in the quick copy menu, it allows copying references which may then be pasted into an org-mode document.

I am using this to add noted behind the entry and keep track of reading notes.

Formatting is copied from the format of org-ref [notes](https://github.com/jkitchin/org-ref/blob/master/org-ref.org#setting-up-notes-to-work-with-multiple-notesorg-files) 

## Installation
Place the `Zotero_to_Orgmod.js`file in the `Zotero/translator` folder. To find the folder location see [The Zotero Data Directory](https://www.zotero.org/support/zotero_data).

## Example
Here is the result of pasting this [paper](https://www.nature.com/articles/d41586-019-00857-9) into an org-mode file after it was imported into my Library:

```org-mode
** Amrhein | 2019 | Scientists rise up against statistical significance | Nature
:PROPERTIES:
 :Custum_ID: amrhein2019
 :TITLE: Scientists rise up against statistical significance
 :AUTHORS: Amrhein, Greenland, McShane, 
 :JOURNAL: Nature
 :YEAR: 2019
 :VOLUME: 567
 :PAGES: 305
 :TYPE: journalArticle
 :DOI: doi:10.1038/d41586-019-00857-9
 :URL: http://www.nature.com/articles/d41586-019-00857-9
 :ABSTRACT: Valentin Amrhein, Sander Greenland, Blake McShane and more than 800 signatories call for an end to hyped claims and the dismissal of possibly crucial effects.
:END:
Here comes my notes...
```
