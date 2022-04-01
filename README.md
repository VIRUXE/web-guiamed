# MedGuide/GuiaMed

**MedGuide** (Or **GuiaMed** in Portuguese) is a one page site acting as a guide to aid in medical preparation for hospital duties.

## Purpose

The purpose of this medical guide is to provide a quick and easy way for surgery assistants to find out which tools they need to get from storage, in order to prepare sergury rooms.

## Requirements

This needs to be hosted in an intranet acessible folder served by a local machine.
Due to the nature of a Hospital's networking policy there can be no external downloads, thus meaning no external dependencies.
Also, since it will be used by people that are not computer savvy it all gets compiled into one .html file. And also for portability sake.
Being that this is used in a Hospital, speed is crucial, so everything is done in pure Javascript and in the most simplistic way possible.

## How it Works

The user first configures the `data.js` file with all the necessary data for the page to correctly render. This being, actual information and image sources for the information cards and menus to be correctly populated.

### Navigation

The user can just type in their query in the search bar and it will search the rendered cards for what matches with their query. Or they can just click each menu entry in the sidebar.
When the user clicks a menu item the entire menu gets repopulated with the menu itens pertaining to the item they clicked on. Visible cards also get filtered to the ones that belong to what the user clicked on.

### Compiling

Due to the nature of this entire project it was best to develop with actual separate files for CSS and Javascript, so I wouldn't lose my mind looking into a massive single file.
The python script called `compile.py` was created to do exactly what it's name says. To compile CSS and Javascript files into the HTML, to actually make it portable.
