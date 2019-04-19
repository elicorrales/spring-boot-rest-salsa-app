package com.eli.spring.boot.rest.salsa.app.controller;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Stream;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MusicRestController {

    @GetMapping("/music")
    public List<String> music() {
        List<String> files = new ArrayList<>();
        Stream<Path> stream = null;
        try {
            System.err.println("\n\n\nmusic()\n\n\n");
            Path music = Paths.get("src/main/resources/static/music");
            if (music.toFile().exists() && music.toFile().isDirectory()) {
                stream = Files.list(music);
                //paths = stream.collect(Collectors.toList());
                stream.forEach( (f) -> { files.add(f.getFileName().toString()); });
            }
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            try { stream.close(); } catch (Exception e) {}
        }

        //return paths;
        return files;
    }
}