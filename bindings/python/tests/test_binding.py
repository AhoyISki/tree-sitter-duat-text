from unittest import TestCase

import tree_sitter
import tree_sitter_duat_text


class TestLanguage(TestCase):
    def test_can_load_grammar(self):
        try:
            tree_sitter.Language(tree_sitter_duat_text.language())
        except Exception:
            self.fail("Error loading DuatText grammar")
