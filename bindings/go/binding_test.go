package tree_sitter_duat_text_test

import (
	"testing"

	tree_sitter "github.com/tree-sitter/go-tree-sitter"
	tree_sitter_duat_text "github.com/ahoyiski/tree-sitter-duat-text/bindings/go"
)

func TestCanLoadGrammar(t *testing.T) {
	language := tree_sitter.NewLanguage(tree_sitter_duat_text.Language())
	if language == nil {
		t.Errorf("Error loading DuatText grammar")
	}
}
