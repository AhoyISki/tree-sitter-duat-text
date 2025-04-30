import XCTest
import SwiftTreeSitter
import TreeSitterDuatText

final class TreeSitterDuatTextTests: XCTestCase {
    func testCanLoadGrammar() throws {
        let parser = Parser()
        let language = Language(language: tree_sitter_duat_text())
        XCTAssertNoThrow(try parser.setLanguage(language),
                         "Error loading DuatText grammar")
    }
}
