package com.jumpa.Jumpa.controller;

import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.mvc.method.annotation.StreamingResponseBody;

import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;

@Controller
@RequestMapping("/")
public class JumpaController {

    @GetMapping
    @ResponseBody
    public StreamingResponseBody getIndex() throws IOException {
        Resource indexFile = new ClassPathResource("static/index.html");
        InputStream indexInputStream = indexFile.getInputStream();

        return (OutputStream outputStream) -> {
            int bytesRead;
            byte[] buffer = new byte[8192];
            while ((bytesRead = indexInputStream.read(buffer)) != -1) {
                outputStream.write(buffer, 0, bytesRead);
            }
            outputStream.flush();
            indexInputStream.close();
        };
    }
}
