"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var code = "Feature: Using Google\n  Background: \n    Something something\n    Something else\n  Scenario: Has a homepage\n    When I navigate to the google home page\n    Then the home page should contain the menu and the search form\n  Scenario: Searching for a term \n    When I navigate to the google home page\n    When I search for Tofu\n    Then the search results page is displayed\n    Then the search results page contains 10 individual search results\n    Then the search results contain a link to the wikipedia tofu page\n\n";
var _default = code;
exports.default = _default;